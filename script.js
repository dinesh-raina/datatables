
$(document).ready(function() {

    $('#data-table').DataTable({

//   createdRow: function( row, data, index ) {
//            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
//                $('th', row).eq(5).addClass('text-success');
//            }
//        },


    ordering: false,
    "info":     false,
//    "pageLength": 50,
    lengthMenu: [[1,10,20,30,-1], [1,10,20,30,"All"]],
    'pagingType': 'simple_numbers',
    'ajax': 'datatables.json',
    'columns': [
     {'data':  'id'},
     {'data':  'name'},
     {'data':  'position'},
     {'data':  'start_date'},
     {'data':  'office'},
     {'data':  'salary'}
    ]
   });

} );
