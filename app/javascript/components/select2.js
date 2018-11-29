import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';

$('.api-card-drugs').select2({
  ajax: {
    url: '/drugs/search',
    dataType: 'json'
  }
});
