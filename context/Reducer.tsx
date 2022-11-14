import {
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

const Reducer = (
  state: State,
  action:
    | SetTagsAction
    | SetTagsFailureAction
    | SetTagsPendingAction
    | SetTeamsAction
    | SetTeamsFailureAction
    | SetTeamsPendingAction
    | SetTransactionsAction
    | SetTransactionsFailureAction
    | SetTransactionsPendingAction
): State => {
  switch (action.type) {
    case 'SET_TAGS_PENDING':
      return {
        ...state,
        tags: { ...state.tags, isPending: true, isFailure: false },
      };
    case 'SET_TAGS_FAILURE':
      return {
        ...state,
        tags: { ...state.tags, isPending: false, isFailure: true },
      };
    case 'SET_TAGS':
      return {
        ...state,
        tags: { isPending: false, isFailure: false, ...action.payload },
      };
    case 'SET_TEAMS_PENDING':
      return {
        ...state,
        teams: { ...state.teams, isPending: true, isFailure: false },
      };
    case 'SET_TEAMS_FAILURE':
      return {
        ...state,
        teams: { ...state.teams, isPending: false, isFailure: true },
      };
    case 'SET_TEAMS':
      return {
        ...state,
        teams: { isPending: false, isFailure: false, ...action.payload },
      };
    case 'SET_TRANSACTIONS_PENDING':
      return {
        ...state,
        transactions: {
          ...state.transactions,
          isPending: true,
          isFailure: false,
        },
      };
    case 'SET_TRANSACTIONS_FAILURE':
      return {
        ...state,
        transactions: {
          ...state.transactions,
          isPending: false,
          isFailure: true,
        },
      };
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: { isPending: false, isFailure: false, ...action.payload },
      };
    default:
      return state;
  }
};

export default Reducer;
