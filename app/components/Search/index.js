import {SearchBar} from '@rneui/themed';
import {noop} from 'lodash';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import theme from '../../includes/styles/theme.style';
import styles from './styles';

const Search = ({onSearch, backgroundColor, placeholder}) => {
  const [search, setSearch] = useState('');

  const handleSearch = search => {
    onSearch(search);
    setSearch(search);
  };

  return (
    <SearchBar
      containerStyle={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      inputContainerStyle={{height: 37}}
      onChangeText={handleSearch}
      placeholder={placeholder}
      round
      value={search}
    />
  );
};

Search.propTypes = {
  backgroundColor: PropTypes.string,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  backgroundColor: theme.COLOR_BINANCE_1ST_BLACK,
  onSearch: noop,
  placeholder: 'Search',
};

export default Search;
