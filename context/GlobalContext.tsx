import { createContext, FC, useReducer } from 'react';

import {
  GlobalProviderProps,
  SetTagsAction,
  SetTagsFailureAction,
  SetTagsPendingAction,
  SetTeamsAction,
  SetTeamsFailureAction,
  SetTeamsPendingAction,
  SetTransactionsAction,
  SetTransactionsFailureAction,
  SetTransactionsPendingAction,
  State,
} from './types';
import Reducer from './Reducer';

const initialState: State = {
  tags: {
    isPending: false,
    isFailure: false,
    tagsData: [],
  },
  teams: {
    isPending: false,
    isFailure: false,
    teamsData: [],
  },
  transactions: {
    isPending: false,
    isFailure: false,
    transactionsData: [],
  },
};

export const GlobalContext = createContext<{
  state: State;
  dispatch: React.Dispatch<
    | SetTagsAction
    | SetTagsFailureAction
    | SetTagsPendingAction
    | SetTeamsAction
    | SetTeamsFailureAction
    | SetTeamsPendingAction
    | SetTransactionsAction
    | SetTransactionsFailureAction
    | SetTransactionsPendingAction
  >;
}>({
  state: initialState,
  dispatch: () => null,
});

export const GlobalProvider: FC<GlobalProviderProps> = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
