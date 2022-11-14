import { ReactNode } from 'react';

import { Tag, Team, Transaction } from 'types/transactions';

export type GlobalProviderProps = {
  children: ReactNode;
};

export type SetTagsAction = {
  payload: {
    tagsData: Tag[];
  };
  type: 'SET_TAGS';
};

export type SetTagsFailureAction = {
  type: 'SET_TAGS_FAILURE';
};

export type SetTagsPendingAction = {
  type: 'SET_TAGS_PENDING';
};

export type SetTeamsAction = {
  payload: {
    teamsData: Team[];
  };
  type: 'SET_TEAMS';
};

export type SetTeamsFailureAction = {
  type: 'SET_TEAMS_FAILURE';
};

export type SetTeamsPendingAction = {
  type: 'SET_TEAMS_PENDING';
};

export type SetTransactionsAction = {
  payload: {
    transactionsData: Transaction[];
  };
  type: 'SET_TRANSACTIONS';
};

export type SetTransactionsFailureAction = {
  type: 'SET_TRANSACTIONS_FAILURE';
};

export type SetTransactionsPendingAction = {
  type: 'SET_TRANSACTIONS_PENDING';
};

export type State = {
  tags: { isPending: boolean; isFailure: boolean; tagsData: Tag[] };
  teams: { isPending: boolean; isFailure: boolean; teamsData: Team[] };
  transactions: {
    isPending: boolean;
    isFailure: boolean;
    transactionsData: Transaction[];
  };
};
