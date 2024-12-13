var documenterSearchIndex = {"docs":
[{"location":"api.html","page":"API","title":"API","text":"CurrentModule = CTModels","category":"page"},{"location":"api.html","page":"API","title":"API","text":"Pages = [\"api.md\"]","category":"page"},{"location":"api.html#API","page":"API","title":"API","text":"","category":"section"},{"location":"api.html","page":"API","title":"API","text":"This page is a dump of all the docstrings found in the code. ","category":"page"},{"location":"api.html","page":"API","title":"API","text":"Modules = [CTModels]\nOrder = [:module, :type, :function, :macro]","category":"page"},{"location":"api.html#CTModels.AbstractControlModel","page":"API","title":"CTModels.AbstractControlModel","text":"abstract type AbstractControlModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractDualModel","page":"API","title":"CTModels.AbstractDualModel","text":"abstract type AbstractDualModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractModel","page":"API","title":"CTModels.AbstractModel","text":"abstract type AbstractModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractObjectiveModel","page":"API","title":"CTModels.AbstractObjectiveModel","text":"abstract type AbstractObjectiveModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractSolution","page":"API","title":"CTModels.AbstractSolution","text":"abstract type AbstractSolution\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractSolverInfos","page":"API","title":"CTModels.AbstractSolverInfos","text":"abstract type AbstractSolverInfos\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractStateModel","page":"API","title":"CTModels.AbstractStateModel","text":"abstract type AbstractStateModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractTimeGridModel","page":"API","title":"CTModels.AbstractTimeGridModel","text":"abstract type AbstractTimeGridModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractTimeModel","page":"API","title":"CTModels.AbstractTimeModel","text":"abstract type AbstractTimeModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractTimesModel","page":"API","title":"CTModels.AbstractTimesModel","text":"abstract type AbstractTimesModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.AbstractVariableModel","page":"API","title":"CTModels.AbstractVariableModel","text":"abstract type AbstractVariableModel\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.BolzaObjectiveModel","page":"API","title":"CTModels.BolzaObjectiveModel","text":"struct BolzaObjectiveModel{TM<:Function, TL<:Function} <: CTModels.AbstractObjectiveModel\n\nFields\n\nmayer::Function\nlagrange::Function\ncriterion::Symbol\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.ControlModel","page":"API","title":"CTModels.ControlModel","text":"struct ControlModel <: CTModels.AbstractControlModel\n\nFields\n\nname::String\ncomponents::Vector{String}\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.ControlModelSolution","page":"API","title":"CTModels.ControlModelSolution","text":"struct ControlModelSolution{TS<:Function} <: CTModels.AbstractControlModel\n\nFields\n\nname::String\ncomponents::Vector{String}\nsolution::Function\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.DualModel","page":"API","title":"CTModels.DualModel","text":"struct DualModel{SC_LB_Dual<:Function, SC_UB_Dual<:Function, CC_LB_Dual<:Function, CC_UB_Dual<:Function, VC_LB_Dual<:(AbstractVector{<:Real}), VC_UB_Dual<:(AbstractVector{<:Real}), BC<:(AbstractVector{<:Real}), BC_Dual<:(AbstractVector{<:Real}), PC<:Function, PC_Dual<:Function, VC<:(AbstractVector{<:Real}), VC_Dual<:(AbstractVector{<:Real})} <: CTModels.AbstractDualModel\n\nFields\n\nstate_constraints_lb_dual::Function\nstate_constraints_ub_dual::Function\ncontrol_constraints_lb_dual::Function\ncontrol_constraints_ub_dual::Function\nvariable_constraints_lb_dual::AbstractVector{<:Real}\nvariable_constraints_ub_dual::AbstractVector{<:Real}\nboundary_constraints::AbstractVector{<:Real}\nboundary_constraints_dual::AbstractVector{<:Real}\npath_constraints::Function\npath_constraints_dual::Function\nvariable_constraints::AbstractVector{<:Real}\nvariable_constraints_dual::AbstractVector{<:Real}\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.EmptyTimeGridModel","page":"API","title":"CTModels.EmptyTimeGridModel","text":"struct EmptyTimeGridModel <: CTModels.AbstractTimeGridModel\n\nFields\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.EmptyVariableModel","page":"API","title":"CTModels.EmptyVariableModel","text":"struct EmptyVariableModel <: CTModels.AbstractVariableModel\n\nFields\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.FixedTimeModel","page":"API","title":"CTModels.FixedTimeModel","text":"struct FixedTimeModel <: CTModels.AbstractTimeModel\n\nFields\n\ntime::Real\nname::String\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.FreeTimeModel","page":"API","title":"CTModels.FreeTimeModel","text":"struct FreeTimeModel <: CTModels.AbstractTimeModel\n\nFields\n\nindex::Int64\nname::String\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.LagrangeObjectiveModel","page":"API","title":"CTModels.LagrangeObjectiveModel","text":"struct LagrangeObjectiveModel{TL<:Function} <: CTModels.AbstractObjectiveModel\n\nFields\n\nlagrange::Function\ncriterion::Symbol\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.MayerObjectiveModel","page":"API","title":"CTModels.MayerObjectiveModel","text":"struct MayerObjectiveModel{TM<:Function} <: CTModels.AbstractObjectiveModel\n\nFields\n\nmayer::Function\ncriterion::Symbol\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.Model","page":"API","title":"CTModels.Model","text":"struct Model{TimesModelType<:CTModels.AbstractTimesModel, StateModelType<:CTModels.AbstractStateModel, ControlModelType<:CTModels.AbstractControlModel, VariableModelType<:CTModels.AbstractVariableModel, DynamicsModelType<:Function, ObjectiveModelType<:CTModels.AbstractObjectiveModel, ConstraintsModelType<:Dict{Symbol, Tuple{Symbol, Union{Function, OrdinalRange{<:Int64}}, AbstractVector{<:Real}, AbstractVector{<:Real}}}} <: CTModels.AbstractModel\n\nFields\n\ntimes::CTModels.AbstractTimesModel\nstate::CTModels.AbstractStateModel\ncontrol::CTModels.AbstractControlModel\nvariable::CTModels.AbstractVariableModel\ndynamics::Function\nobjective::CTModels.AbstractObjectiveModel\nconstraints::Dict{Symbol, Tuple{Symbol, Union{Function, OrdinalRange{<:Int64}}, AbstractVector{<:Real}, AbstractVector{<:Real}}}\ndefinition::Expr\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.PreModel","page":"API","title":"CTModels.PreModel","text":"mutable struct PreModel <: CTModels.AbstractModel\n\nFields\n\ntimes::Union{Nothing, CTModels.AbstractTimesModel}: Default: nothing\nstate::Union{Nothing, CTModels.AbstractStateModel}: Default: nothing\ncontrol::Union{Nothing, CTModels.AbstractControlModel}: Default: nothing\nvariable::CTModels.AbstractVariableModel: Default: EmptyVariableModel()\ndynamics::Union{Nothing, Function}: Default: nothing\nobjective::Union{Nothing, CTModels.AbstractObjectiveModel}: Default: nothing\nconstraints::Dict{Symbol, Tuple{Symbol, Union{Function, OrdinalRange{<:Int64}}, AbstractVector{<:Real}, AbstractVector{<:Real}}}: Default: ConstraintsDictType()\ndefinition::Union{Nothing, Expr}: Default: nothing\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.Solution","page":"API","title":"CTModels.Solution","text":"struct Solution{TimeGridModelType<:CTModels.AbstractTimeGridModel, TimesModelType<:CTModels.AbstractTimesModel, StateModelType<:CTModels.AbstractStateModel, ControlModelType<:CTModels.AbstractControlModel, VariableModelType<:CTModels.AbstractVariableModel, CostateModelType<:Function, ObjectiveValueType<:Real, DualModelType<:CTModels.AbstractDualModel, SolverInfosType<:CTModels.AbstractSolverInfos} <: CTModels.AbstractSolution\n\nFields\n\ntime_grid::CTModels.AbstractTimeGridModel\ntimes::CTModels.AbstractTimesModel\nstate::CTModels.AbstractStateModel\ncontrol::CTModels.AbstractControlModel\nvariable::CTModels.AbstractVariableModel\ncostate::Function\ncost::Real\ndual::CTModels.AbstractDualModel\nsolver_infos::CTModels.AbstractSolverInfos\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.SolverInfos","page":"API","title":"CTModels.SolverInfos","text":"struct SolverInfos{TI<:Dict{Symbol, Any}} <: CTModels.AbstractSolverInfos\n\nFields\n\niterations::Int64\nstopping::Symbol\nmessage::String\nsuccess::Bool\nconstraints_violation::Float64\ninfos::Dict{Symbol, Any}\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.StateModel","page":"API","title":"CTModels.StateModel","text":"struct StateModel <: CTModels.AbstractStateModel\n\nFields\n\nname::String\ncomponents::Vector{String}\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.StateModelSolution","page":"API","title":"CTModels.StateModelSolution","text":"struct StateModelSolution{TS<:Function} <: CTModels.AbstractStateModel\n\nFields\n\nname::String\ncomponents::Vector{String}\nsolution::Function\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.TimeGridModel","page":"API","title":"CTModels.TimeGridModel","text":"struct TimeGridModel{T<:Union{StepRangeLen, AbstractVector{<:Real}}} <: CTModels.AbstractTimeGridModel\n\nFields\n\ngrid::Union{StepRangeLen, AbstractVector{<:Real}}\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.TimesModel","page":"API","title":"CTModels.TimesModel","text":"struct TimesModel{TI<:CTModels.AbstractTimeModel, TF<:CTModels.AbstractTimeModel} <: CTModels.AbstractTimesModel\n\nFields\n\ninitial::CTModels.AbstractTimeModel\nfinal::CTModels.AbstractTimeModel\ntime_name::String\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.VariableModel","page":"API","title":"CTModels.VariableModel","text":"struct VariableModel <: CTModels.AbstractVariableModel\n\nFields\n\nname::String\ncomponents::Vector{String}\n\n\n\n\n\n","category":"type"},{"location":"api.html#CTModels.VariableModelSolution","page":"API","title":"CTModels.VariableModelSolution","text":"struct VariableModelSolution{TS<:(AbstractVector{<:Real})} <: CTModels.AbstractVariableModel\n\nFields\n\nname::String\ncomponents::Vector{String}\nsolution::AbstractVector{<:Real}\n\n\n\n\n\n","category":"type"},{"location":"api.html#Base.show-Tuple{IO, MIME{Symbol(\"text/plain\")}, CTModels.Model}","page":"API","title":"Base.show","text":"show(\n    io::IO,\n    _::MIME{Symbol(\"text/plain\")},\n    ocp::CTModels.Model\n) -> Union{Nothing, Vector}\n\n\nPrint the optimal control problem.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__constraint_label-Tuple{}","page":"API","title":"CTModels.__constraint_label","text":"__constraint_label() -> Symbol\n\n\nUsed to set the default value of the label of a constraint. A unique value is given to each constraint using the gensym function and prefixing by :unamed.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__control_components-Tuple{Int64, String}","page":"API","title":"CTModels.__control_components","text":"__control_components(\n    m::Int64,\n    name::String\n) -> Vector{String}\n\n\nUsed to set the default value of the names of the controls. The default value is [\"u\"] for a one dimensional control, and [\"u₁\", \"u₂\", ...] for a multi dimensional control.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__control_name-Tuple{}","page":"API","title":"CTModels.__control_name","text":"__control_name() -> String\n\n\nUsed to set the default value of the names of the control. The default value is \"u\".\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__criterion_type-Tuple{}","page":"API","title":"CTModels.__criterion_type","text":"__criterion_type() -> Symbol\n\n\nUsed to set the default value of the type of criterion. Either :min or :max. The default value is :min. The other possible criterion type is :max.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_control_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_control_set","text":"__is_control_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_definition_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_definition_set","text":"__is_definition_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_dynamics_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_dynamics_set","text":"__is_dynamics_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_objective_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_objective_set","text":"__is_objective_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_state_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_state_set","text":"__is_state_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_times_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_times_set","text":"__is_times_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__is_variable_set-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.__is_variable_set","text":"__is_variable_set(ocp::CTModels.PreModel) -> Bool\n\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__state_components-Tuple{Int64, String}","page":"API","title":"CTModels.__state_components","text":"__state_components(n::Int64, name::String) -> Vector{String}\n\n\nUsed to set the default value of the names of the states. The default value is [\"x\"] for a one dimensional state, and [\"x₁\", \"x₂\", ...] for a multi dimensional state.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__state_name-Tuple{}","page":"API","title":"CTModels.__state_name","text":"__state_name() -> String\n\n\nUsed to set the default value of the name of the state. The default value is \"x\".\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__time_name-Tuple{}","page":"API","title":"CTModels.__time_name","text":"__time_name() -> String\n\n\nUsed to set the default value of the name of the time. The default value is t.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__variable_components-Tuple{Int64, String}","page":"API","title":"CTModels.__variable_components","text":"__variable_components(\n    q::Int64,\n    name::String\n) -> Vector{String}\n\n\nUsed to set the default value of the names of the variables. The default value is [\"v\"] for a one dimensional variable, and [\"v₁\", \"v₂\", ...] for a multi dimensional variable.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.__variable_name-Tuple{}","page":"API","title":"CTModels.__variable_name","text":"__variable_name() -> String\n\n\nUsed to set the default value of the names of the variables. The default value is \"v\".\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.control!-Union{Tuple{T2}, Tuple{T1}, Tuple{CTModels.PreModel, Int64}, Tuple{CTModels.PreModel, Int64, T1}, Tuple{CTModels.PreModel, Int64, T1, Vector{T2}}} where {T1<:Union{String, Symbol}, T2<:Union{String, Symbol}}","page":"API","title":"CTModels.control!","text":"control!(ocp::CTModels.PreModel, m::Int64)\ncontrol!(\n    ocp::CTModels.PreModel,\n    m::Int64,\n    name::Union{String, Symbol}\n)\ncontrol!(\n    ocp::CTModels.PreModel,\n    m::Int64,\n    name::Union{String, Symbol},\n    components_names::Array{T2<:Union{String, Symbol}, 1}\n)\n\n\nDefine the control dimension and possibly the names of each coordinate.\n\nnote: Note\nYou must use control! only once to set the control dimension.\n\nExamples\n\njulia> control!(ocp, 1)\njulia> control_dimension(ocp)\n1\njulia> control_components(ocp)\n[\"u\"]\n\njulia> control!(ocp, 1, \"v\")\njulia> control_dimension(ocp)\n1\njulia> control_components(ocp)\n[\"v\"]\n\njulia> control!(ocp, 2)\njulia> control_dimension(ocp)\n2\njulia> control_components(ocp)\n[\"u₁\", \"u₂\"]\n\njulia> control!(ocp, 2, :v)\njulia> control_dimension(ocp)\n2\njulia> control_components(ocp)\n[\"v₁\", \"v₂\"]\n\njulia> control!(ocp, 2, \"v\")\njulia> control_dimension(ocp)\n2\njulia> control_components(ocp)\n[\"v₁\", \"v₂\"]\n\njulia> control!(ocp, 2, \"v\", [\"a\", \"b\"])\njulia> control_dimension(ocp)\n2\njulia> control_components(ocp)\n[\"a\", \"b\"]\n\njulia> control!(ocp, 2, \"v\", [:a, :b])\njulia> control_dimension(ocp)\n2\njulia> control_components(ocp)\n[\"a\", \"b\"]\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.definition!-Tuple{CTModels.PreModel, Expr}","page":"API","title":"CTModels.definition!","text":"definition!(ocp::CTModels.PreModel, definition::Expr)\n\n\nSet the model definition of the optimal control problem.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.definition-Tuple{CTModels.Model}","page":"API","title":"CTModels.definition","text":"definition(ocp::CTModels.Model) -> Expr\n\n\nReturn the model definition of the optimal control problem or nothing.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.dim_boundary_cons_nl-Tuple{CTModels.Model}","page":"API","title":"CTModels.dim_boundary_cons_nl","text":"dim_boundary_cons_nl(ocp::CTModels.Model) -> Any\n\n\nReturn the dimension of the boundary constraints.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.dim_control_cons_box-Tuple{CTModels.Model}","page":"API","title":"CTModels.dim_control_cons_box","text":"dim_control_cons_box(ocp::CTModels.Model) -> Any\n\n\nReturn the dimension of box constraints on control.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.dim_path_cons_nl-Tuple{CTModels.Model}","page":"API","title":"CTModels.dim_path_cons_nl","text":"dim_path_cons_nl(ocp::CTModels.Model) -> Any\n\n\nReturn the dimension of nonlinear path constraints.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.dim_state_cons_box-Tuple{CTModels.Model}","page":"API","title":"CTModels.dim_state_cons_box","text":"dim_state_cons_box(ocp::CTModels.Model) -> Any\n\n\nReturn the dimension of box constraints on state.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.dim_variable_cons_box-Tuple{CTModels.Model}","page":"API","title":"CTModels.dim_variable_cons_box","text":"dim_variable_cons_box(ocp::CTModels.Model) -> Any\n\n\nReturn the dimension of box constraints on variable.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.dim_variable_cons_nl-Tuple{CTModels.Model}","page":"API","title":"CTModels.dim_variable_cons_nl","text":"dim_variable_cons_nl(ocp::CTModels.Model) -> Any\n\n\nReturn the dimension of nonlinear variable constraints.\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.objective!","page":"API","title":"CTModels.objective!","text":"objective!(ocp::CTModels.PreModel; ...)\nobjective!(\n    ocp::CTModels.PreModel,\n    criterion::Symbol;\n    mayer,\n    lagrange\n)\n\n\nSet the objective of the optimal control problem.\n\nArguments\n\nocp::PreModel: the optimal control problem.\ncriterion::Symbol: the type of criterion. Either :min or :max. Default is :min.\nmayer::Union{Function, Nothing}: the Mayer function (inplace). Default is nothing.\nlagrange::Union{Function, Nothing}: the Lagrange function (inplace). Default is nothing.\n\nnote: Note\nThe state, control and variable must be set before the objective.\nThe objective must not be set before.\nAt least one of the two functions must be given. Please provide a Mayer or a Lagrange function.\n\nExamples\n\n```@example julia> function mayer!(r, x0, xf, v)            r[1] = x0[1] + xf[1] + v[1]        end juila> function lagrange!(r, t, x, u, v)            r[1] = x[1] + u[1] + v[1]        end julia> objective!(ocp, :min, mayer=mayer!, lagrange=lagrange!)\n\n\n\n\n\n","category":"function"},{"location":"api.html#CTModels.state!-Union{Tuple{T2}, Tuple{T1}, Tuple{CTModels.PreModel, Int64}, Tuple{CTModels.PreModel, Int64, T1}, Tuple{CTModels.PreModel, Int64, T1, Vector{T2}}} where {T1<:Union{String, Symbol}, T2<:Union{String, Symbol}}","page":"API","title":"CTModels.state!","text":"state!(ocp::CTModels.PreModel, n::Int64)\nstate!(\n    ocp::CTModels.PreModel,\n    n::Int64,\n    name::Union{String, Symbol}\n)\nstate!(\n    ocp::CTModels.PreModel,\n    n::Int64,\n    name::Union{String, Symbol},\n    components_names::Array{T2<:Union{String, Symbol}, 1}\n)\n\n\nDefine the state dimension and possibly the names of each component.\n\nnote: Note\nYou must use state! only once to set the state dimension.\n\nExamples\n\njulia> state!(ocp, 1)\njulia> state_dimension(ocp)\n1\njulia> state_components(ocp)\n[\"x\"]\n\njulia> state!(ocp, 1, \"y\")\njulia> state_dimension(ocp)\n1\njulia> state_components(ocp)\n[\"y\"]\n\njulia> state!(ocp, 2)\njulia> state_dimension(ocp)\n2\njulia> state_components(ocp)\n[\"x₁\", \"x₂\"]\n\njulia> state!(ocp, 2, :y)\njulia> state_dimension(ocp)\n2\njulia> state_components(ocp)\n[\"y₁\", \"y₂\"]\n\njulia> state!(ocp, 2, \"y\")\njulia> state_dimension(ocp)\n2\njulia> state_components(ocp)\n[\"y₁\", \"y₂\"]\n\njulia> state!(ocp, 2, \"y\", [\"u\", \"v\"])\njulia> state_dimension(ocp)\n2\njulia> state_components(ocp)\n[\"u\", \"v\"]\n\njulia> state!(ocp, 2, \"y\", [:u, :v])\njulia> state_dimension(ocp)\n2\njulia> state_components(ocp)\n[\"u\", \"v\"]\n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.time!-Tuple{CTModels.PreModel}","page":"API","title":"CTModels.time!","text":"time!(ocp::CTModels.PreModel; t0, tf, ind0, indf, time_name)\n\n\nSet the initial and final times. We denote by t0 the initial time and tf the final time. The optimal control problem is denoted ocp. When a time is free, then, one must provide the corresponding index of the ocp variable.\n\nnote: Note\nYou must use time! only once to set either the initial or the final time, or both.\n\nExamples\n\njulia> time!(ocp, t0=0,   tf=1  ) # Fixed t0 and fixed tf\njulia> time!(ocp, t0=0,   indf=2) # Fixed t0 and free  tf\njulia> time!(ocp, ind0=2, tf=1  ) # Free  t0 and fixed tf\njulia> time!(ocp, ind0=2, indf=3) # Free  t0 and free  tf\n\nWhen you plot a solution of an optimal control problem, the name of the time variable appears. By default, the name is \"t\". Consider you want to set the name of the time variable to \"s\".\n\njulia> time!(ocp, t0=0, tf=1, name=\"s\") # name is a String\n# or\njulia> time!(ocp, t0=0, tf=1, name=:s ) # name is a Symbol  \n\n\n\n\n\n","category":"method"},{"location":"api.html#CTModels.variable!-Union{Tuple{T2}, Tuple{T1}, Tuple{CTModels.PreModel, Int64}, Tuple{CTModels.PreModel, Int64, T1}, Tuple{CTModels.PreModel, Int64, T1, Vector{T2}}} where {T1<:Union{String, Symbol}, T2<:Union{String, Symbol}}","page":"API","title":"CTModels.variable!","text":"variable!(ocp::CTModels.PreModel, q::Int64)\nvariable!(\n    ocp::CTModels.PreModel,\n    q::Int64,\n    name::Union{String, Symbol}\n)\nvariable!(\n    ocp::CTModels.PreModel,\n    q::Int64,\n    name::Union{String, Symbol},\n    components_names::Array{T2<:Union{String, Symbol}, 1}\n)\n\n\nDefine the variable dimension and possibly the names of each component.\n\nnote: Note\nYou can use variable! once to set the variable dimension.\n\nExamples\n\njulia> variable!(ocp, 1, \"v\")\njulia> variable!(ocp, 2, \"v\", [ \"v₁\", \"v₂\" ])\n\n\n\n\n\n","category":"method"},{"location":"index.html#CTModels","page":"Introduction","title":"CTModels","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Documentation for CTModels.","category":"page"},{"location":"index.html#Dependencies","page":"Introduction","title":"Dependencies","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"All the numerical simulations to generate this documentation are performed with the following packages.","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"using Pkg\nPkg.status()","category":"page"}]
}
