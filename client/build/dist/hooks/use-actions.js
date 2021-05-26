import {useMemo} from "../../_snowpack/pkg/react.js";
import {useDispatch} from "../../_snowpack/pkg/react-redux.js";
import {bindActionCreators} from "../../_snowpack/pkg/redux.js";
import * as actionCreators from "../state/action-creators/index.js";
export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
