import {StyleSheet} from 'react-native';
import {theme} from '../../colors';

export default StyleSheet.create({
  homeHeader: {
    width: '100%',
    paddingHorizontal: 20,
    height: 80,
    backgroundColor: theme.secondary,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: theme.white,
    fontSize: 24,
  },
  homeLeftSection: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  currentDate: {
    fontSize: 38,
    color: theme.white,
    fontWeight: 'bold',
    marginRight: 4,
  },
  currentMonth: {
    color: theme.white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  fullYear: {
    color: theme.white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  homeRightSection: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  dayOfWeek: {
    color: theme.white,
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  fabButton: {flex: 1, backgroundColor: '#f3f3f3'},
});
