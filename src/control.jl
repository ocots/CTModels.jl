"""
$(TYPEDSIGNATURES)

Used to set the default value of the names of the control.
The default value is `"u"`.
"""
__control_name()::String = "u"

"""
$(TYPEDSIGNATURES)

Used to set the default value of the names of the controls.
The default value is `["u"]` for a one dimensional control, and `["u₁", "u₂", ...]` for a multi dimensional control.
"""
__control_components(m::Dimension, name::String)::Vector{String} =
    m > 1 ? [name * CTBase.ctindices(i) for i ∈ range(1, m)] : [name]

"""
$(TYPEDSIGNATURES)

Define the control dimension and possibly the names of each coordinate.

!!! note

    You must use control! only once to set the control dimension.

# Examples

```@example
julia> control!(ocp, 1)
julia> control_dimension(ocp)
1
julia> control_components(ocp)
["u"]

julia> control!(ocp, 1, "v")
julia> control_dimension(ocp)
1
julia> control_components(ocp)
["v"]

julia> control!(ocp, 2)
julia> control_dimension(ocp)
2
julia> control_components(ocp)
["u₁", "u₂"]

julia> control!(ocp, 2, :v)
julia> control_dimension(ocp)
2
julia> control_components(ocp)
["v₁", "v₂"]

julia> control!(ocp, 2, "v")
julia> control_dimension(ocp)
2
julia> control_components(ocp)
["v₁", "v₂"]

julia> control!(ocp, 2, "v", ["a", "b"])
julia> control_dimension(ocp)
2
julia> control_components(ocp)
["a", "b"]

julia> control!(ocp, 2, "v", [:a, :b])
julia> control_dimension(ocp)
2
julia> control_components(ocp)
["a", "b"]
```
"""
function control!(
    ocp::OptimalControlModelMutable,
    m::Dimension,
    name::T1 = __control_name(),
    components_names::Vector{T2} = __control_components(m, string(name)),
)::Nothing where {T1<:Union{String, Symbol}, T2<:Union{String, Symbol}}

    # checkings
    __is_control_set(ocp) && throw(CTBase.UnauthorizedCall("the control has already been set."))
    (m > 1) &&
        (size(components_names, 1) ≠ m) &&
        throw(
            CTBase.IncorrectArgument("the number of control names must be equal to the control dimension"),
        )

    # set the control
    ocp.control = ControlModel(string(name), string.(components_names))

    return nothing
end

# ------------------------------------------------------------------------------ #
# GETTERS
# ------------------------------------------------------------------------------ #

# from ControlModel
name(model::ControlModel)::String = model.name
components(model::ControlModel)::Vector{String} = model.components
(dimension(model::ControlModel)::Dimension) = length(components(model))

# from OptimalControlModel
(control(model::OptimalControlModel{T, S, C, V, D, O})::C) where {
    T<:AbstractTimesModel,
    S<:AbstractStateModel, 
    C<:AbstractControlModel, 
    V<:AbstractVariableModel,
    D<:Function,
    O<:AbstractObjectiveModel} = model.control
control_name(model::OptimalControlModel)::String = name(control(model))
control_components(model::OptimalControlModel)::Vector{String} = components(control(model))
control_dimension(model::OptimalControlModel)::Dimension = dimension(control(model))