<script>
    $('.panel-title > a').click(function() {
      $(this).find('i').toggleClass('fa-plus fa-minus')
        .closest('panel').siblings('panel')
        .find('i')
        .removeClass('fa-minus').addClass('fa-plus');
    });
  </script>