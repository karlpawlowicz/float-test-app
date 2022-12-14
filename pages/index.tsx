import type { NextPage } from 'next';
import { useCallback, useContext, useEffect } from 'react';
import Head from 'next/head';

import { GlobalContext } from 'context/GlobalContext';
import { Tag, Team } from 'types/transactions';
import DropDown from 'components/DropDown';
import TransactionsLineChart from 'components/TransactionLineChart';

import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const { tags, teams, transactions } = state;

  const fetchData = useCallback(async () => {
    const url =
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000/api'
        : 'https://float-test-app.vercel.app/api';
    const urls = [`${url}/tags`, `${url}/teams`, `${url}/transactions`];
    let responses;
    let data;

    dispatch({
      type: 'SET_TAGS_PENDING',
    });
    dispatch({
      type: 'SET_TEAMS_PENDING',
    });
    dispatch({
      type: 'SET_TRANSACTIONS_PENDING',
    });

    try {
      responses = await Promise.all(urls.map(async (url) => await fetch(url)));
      data = await Promise.all(
        responses.map(async (response) => await response.json())
      );
    } catch (error) {
      console.error(error);
    }

    const tagsData = data && data[0]?.data?.tags;
    const teamsData = data && data[1]?.data?.teams;
    const transactionsData = data && data[2]?.data?.transactions;

    dispatch({
      payload: {
        tagsData,
      },
      type: 'SET_TAGS',
    });
    dispatch({
      payload: {
        teamsData,
      },
      type: 'SET_TEAMS',
    });
    dispatch({
      payload: {
        transactionsData,
      },
      type: 'SET_TRANSACTIONS',
    });
  }, [dispatch]);

  const isPending = () =>
    tags.isPending || teams.isPending || transactions.isPending;

  const handleTagsClick = async (tag: Tag) => {
    const url =
      process.env.NODE_ENV !== 'production'
        ? `http://localhost:3000/api/transactions?tags=${tag}`
        : `https://float-test-app.vercel.app/api/transactions?tags=${tag}`;
    const response = await fetch(url);
    const data = await response.json();
    const transactionsData = data?.data?.transactions;

    dispatch({
      payload: {
        transactionsData,
      },
      type: 'SET_TRANSACTIONS',
    });
  };

  const handleTeamsClick = async (team: Team) => {
    const url =
      process.env.NODE_ENV !== 'production'
        ? `http://localhost:3000/api/transactions?teams=${team}`
        : `https://float-test-app.vercel.app/api/transactions?teams=${team}`;
    const response = await fetch(url);
    const data = await response.json();
    const transactionsData = data?.data?.transactions;

    dispatch({
      payload: {
        transactionsData,
      },
      type: 'SET_TRANSACTIONS',
    });
  };

  useEffect(() => {
    fetchData().catch((error) => console.error(error));
  }, [fetchData]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {isPending() ? (
          <div>Loading...</div>
        ) : (
          <>
            <DropDown
              items={tags.tagsData}
              label={'Tags'}
              onClick={handleTagsClick}
            />
            <DropDown
              items={teams.teamsData}
              label={'Teams'}
              onClick={handleTeamsClick}
            />
            <TransactionsLineChart />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
