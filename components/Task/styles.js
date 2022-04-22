import {StyleSheet} from 'react-native';
import {theme} from '../../colors';

export default StyleSheet.create({
  item: {
    backgroundColor: theme.white,
    padding: 15,
    borderBottomColor: theme.background,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    paddingLeft: 5,
    maxWidth: '80%',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.primary,
  },
  itemTextCompleted: {
    paddingLeft: 5,
    textDecorationLine: 'line-through',
    maxWidth: '80%',
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.primaryLight,
  },
  time: {
    fontWeight: 'bold',
    color: theme.primaryLight,
    fontSize: 16,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
});
