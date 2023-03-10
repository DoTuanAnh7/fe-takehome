import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
// import Avatar from '../../components/Avatar.tsx';
import Button from '../../components/Button';
import NewSummary from '../../components/NewSummary.js';
import Search from '../../components/Search';
import Body from '../../components/typography/Body';
import Headline from '../../components/typography/Headline';
import * as commonStyle from '../../includes/main-style';
import theme from '../../includes/styles/theme.style';
import { useDispatch, useSelector } from 'react-redux';
import HelpModal from '../../components/HelpModal';

import { Badge, Icon as IconRNE } from '@rneui/themed';
import Loading from '../../components/Loading';
import moment from 'moment';
import { styles } from './style.js';


const Dashboard = ({ navigation: { navigate } }): JSX.Element => {
  const dispatch = useDispatch();
  // const portfolio = useSelector(state => state.portfolio);
  // const watchlist = useSelector(state => state.watchlist);
  const navigateToMyAccount = () => navigate('MyAccount');

  const isFocused = useIsFocused();

  const [showBalance, setShowBalance] = useState(true);
  const [detailWatchList, setDetailWatchList] = useState({});
  const [filter, setFilter] = useState('6M');
  const [portfolioData, setPortfolioData] = useState({});

  const [marked, setMarked] = useState([]);


  return (
    <View></View>
  );
};

export default Dashboard;
