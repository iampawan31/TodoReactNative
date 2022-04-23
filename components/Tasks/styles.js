import {StyleSheet} from 'react-native';
import {theme} from '../../colors';

export default StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#eff2f5',
  },
  sectionHeading: {
    color: '#000',
    fontSize: 36,
    fontWeight: 'bold',
  },
  items: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  tasksWrapper: {
    height: '100%',
  },
  emptyTaskList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: theme.white,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#55BCF6',
    borderWidth: 1,
  },
  addText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '200',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#55BCF6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
