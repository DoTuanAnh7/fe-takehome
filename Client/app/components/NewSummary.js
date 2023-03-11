import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, ListItem} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {getNews} from '../redux/user/actions';
import moment from 'moment';

const list = [
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://www.dummies.com/wp-content/uploads/stock-investing.jpg',
    subtitle: 'Vice Chairman',
    timeDate: '3-18  14:55',
    stockInfo: {
      name: 'China Unicom (00762)',
      diff: -4.48,
    },
  },
  {
    name: 'HSBC Research: Upgrades Weichai Power (02338)  HK$28  "Buy"',
    avatar_url: 'https://cdn.mos.cms.futurecdn.net/wCWVf8EaMueeBfRJkdkaSE.jpg',
    subtitle: 'Vice President',
    timeDate: '3-18  14:55',
  },
  {
    name: 'HSBC Research: Upgrades Weichai Power (02338)  HK$28  "Buy"',
    avatar_url: 'https://cdn.mos.cms.futurecdn.net/wCWVf8EaMueeBfRJkdkaSE.jpg',
    subtitle: 'Vice President',
    timeDate: '3-18  14:55',
  },
  {
    name: 'HSBC Research: Upgrades Weichai Power (02338)  HK$28  "Buy"',
    avatar_url: 'https://cdn.mos.cms.futurecdn.net/wCWVf8EaMueeBfRJkdkaSE.jpg',
    subtitle: 'Vice President',
    timeDate: '3-18  14:55',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://www.dummies.com/wp-content/uploads/stock-investing.jpg',
    subtitle: 'Vice Chairman',
    timeDate: '3-18  14:55',
    stockInfo: {
      name: 'China Unicom (00762)',
      diff: -4.48,
    },
  },
  {
    name: 'Chris Jackson Upgrades Weichai Power ',
    avatar_url:
      'https://www.dummies.com/wp-content/uploads/stock-investing.jpg',
    subtitle: 'Vice Chairman',
    timeDate: '3-18  14:55',
    stockInfo: {
      name: 'China Unicom (00762)',
      diff: -4.48,
    },
  },
];

const NewSummary = () => {
  const dispatch = useDispatch();
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    getNewsInfomation();
  }, []);

  const getNewsInfomation = async () => {
    const onResponse = async (response) => {
      setListNews(response.data)
    };

    const onError = error => {
      console.log('error', error);
    };

    dispatch(
      getNews({
        data: {
          "skip": 0,
          "limit": 2,
        },
        onResponse,
        onError,
      }),
    );
  };
  const renderItem = ({ item }) => {
    return (
      <ListItem
        containerStyle={{
          backgroundColor: '#000',
        }}
        bottomDivider>
        <ListItem.Content>
          <View style={styles.newContent}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.textSourceTitle}>{item.description}</Text>
            </View>

            <View style={styles.subContent}>
              <Text style={styles.textSourceTitle}>{item.source}</Text>
              <Text style={styles.textSubTitle}>{moment(item.createdAt).format('LL')}</Text>
            </View>
          </View>
        </ListItem.Content>
        <Avatar
          source={{ uri: item.thumbnail }}
          containerStyle={{
            borderRadius: 10,
          }}
          avatarStyle={{
            borderRadius: 10,
          }}
          size="large"
        />
      </ListItem>
    );
  };

  return (
    <View>
      <FlatList
        nestedScrollEnabled={true}
        data={listNews}
        keyExtractor={(item, index) => index + ''}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NewSummary;

const styles = StyleSheet.create({
  newContent: {
    justifyContent: 'flex-start',
    width: '90%'
  },
  textTitle: { color: 'white', fontSize: 14 },
  textSubTitle: { color: '#999999', fontSize: 13 },
  textSourceTitle: { color: '#999999', fontSize: 13, paddingRight: 30 },

  stockInfo: {
    borderRadius: 10,
    backgroundColor: '#1D222E',
    padding: 5,
    flexDirection: 'row',
    marginTop: 16,
  },
  stockName: {
    color: '#FFFFFF',
    marginRight: 16,
  },
  stockGreen: {
    color: '#0FBD71',
  },
  stockRed: {
    color: '#FF4C4C',
  },
  subContent: {
    flexDirection: 'row',
    paddingTop: 35,
  },
});
