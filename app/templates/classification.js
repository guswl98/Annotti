const { leftMenu } = require('./left-menu');
const { mainView } = require('./main-view');
const { labelMenu } = require('./labels');
const { InformationTemplate } = require('./information');
const { classificationZoom } = require('./classification-zoom');
const { classificationAnalysisTemplate } = require('./classification-analysis');

var classificationTemplate =
  '<div class="main-container">' +
  leftMenu +
  '<div class="working-area">' +
  mainView +
  labelMenu +
  InformationTemplate +
  classificationZoom +
  classificationAnalysisTemplate +
  '</div>' +
  '</div>' +
  '<script src="../renderers/commons.js"></script>' +
  '<script src="../renderers/add-label.js"></script>' +
  '<script src="../renderers/classification.js"></script>' +
  '<script src="../renderers/classification-analysis.js"></script>';

module.exports = { classificationTemplate };
