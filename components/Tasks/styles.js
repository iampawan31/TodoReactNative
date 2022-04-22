import {StyleSheet} from 'react-native';

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
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  item: {},
  emptyTaskList: {
    height: 200,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
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
