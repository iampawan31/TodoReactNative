import {StyleSheet} from 'react-native';
import {theme} from '../../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  keyboardScrollView: {
    paddingVertical: 10,
    flex: 1,
    width: '100%',
  },
  logo: {
    flex: 1,
    height: 120,
    width: 80,
    alignSelf: 'center',
    margin: 30,
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
    marginTop: 20,
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
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: theme.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
