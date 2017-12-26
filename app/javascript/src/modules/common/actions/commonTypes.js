import mirrorCreator from 'mirror-creator';

const commonTypes = mirrorCreator([
  'LOAD_CARDS',
  'LOAD_CARDS_FAILURE',
  'LOAD_CARDS_SUCCESS',
  'FILTER_CHANGE'
]);

export default commonTypes;