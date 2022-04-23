import {StyleSheet} from 'react-native';
import {theme} from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: theme.black,
    fontWeight: 'bold',
  },
  keyboardScrollView: {
    paddingVertical: 10,
    flex: 1,
    width: '100%',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: theme.primary,
    marginHorizontal: 30,
    marginTop: 30,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: theme.alternate,
    marginHorizontal: 30,
    marginTop: 30,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  timePickerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  selectTime: {
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 36,
  },
  selectTimeLabel: {
    flexGrow: 1,
    fontSize: 16,
  },
});
