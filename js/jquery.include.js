(function($) {
    $.fn.extend({
        include : function(src) {
            this.each(function() {
                var container = $(this);
                var pageSrc   = src;

                $.get(pageSrc, function(data) {
                    container.html(data);
                });
            });
        return this;
        }
    });

    $(document).ready(function() {
        // 각각의 영역에 경로 확인 후 적용, 필요시 인클루드 파일은 계속 추가 가능
        // 앵귤러 상품상세 싱크 맞춤
        $('.detail_brand_info').include('../ruler/product/detail_brand_info.html');
        $('.detail_review_section').include('../ruler/product/detail_review_section.html');
        $('.detail_guide_wrap').include('../ruler/product/detail_guide_wrap.html');
        $('.detail_item_evt').include('../ruler/product/detail_item_evt.html');
        $('.detail_item_recommend').include('../ruler/product/detail_item_recommend.html');

        // 공통 레이아웃
        // $('.header').include('include/header.html');
        $('.header_wrap').include('../ruler/header_wrap/header_wrap1.html');
        $('.footer').include('../ruler/footer/footer.html');

        //  카테고리
        $('.nav_category').include('../ruler/nav_category/nav_category.html');
        $('.tab_section').include('../ruler/tab_section/tab_section.html');
        $('.tab_category').include('../ruler/tab_category/tab_category.html');
        $('.tab_category2').include('../ruler/tab_category2/tab_category2.html');
        $('.tabbx').include('../ruler/tabbx/tabbx.html');
        $('.brands_lst').include('../ruler/brands_lst/brands_lst.html');
        $('.detail_categroy').include('../ruler/detail_categroy/detail_categroy.html');
        $('.filter_wrap').include('../ruler/searchbx/filter_wrap.html');

        // 상품 뷰
        $('.feed_area').include('../ruler/feed_area/feed_area.html'); // feed
        $('.banner_area').include('../ruler/banner_area/banner_area.html'); // 배너
        $('.evt_area').include('../ruler/evt_area/evt_area.html'); // 이벤트 배너
        $('.pt_area').include('../ruler/pt_area/pt_area.html'); // pt 배너
        $('.prd_s').include('../ruler/prd/prd_s.html'); // 상품상세
        $('.prd_b').include('../ruler/prd/prd_b.html'); // 상품상세
        $('.prd_bd').include('../ruler/prd/prd_bd.html'); // 상품상세
        $('.issue_banner').include('../ruler/issue_banner/issue_banner.html'); //빅배너

        // form 요소
        $('.ckbx').include('../ruler/ckbx/ckbx.html');
        $('.rabx').include('../ruler/rabx/rabx.html');
        $('.selbx').include('../ruler/selbx/selbx.html');
        $('.dropbx').include('../ruler/dropbx/dropbx.html');
        $('.inpbx').include('../ruler/inpbx/inpbx.html');
        $('.searchbx').include('../ruler/searchbx/searchbx.html');
        $('.inptxtbx').include('../ruler/inptxtbx/inptxtbx.html');
        $('.colorpicker').include('../ruler/colorpicker/colorpicker.html');
        $('.rating').include('../ruler/rating/rating.html');
        $('.numcoutbx').include('../ruler/numcoutbx/numcoutbx.html');

        // 상품상세
        $('.detail_header').include('../ruler/detail_header/detail_header.html');

        // 테이블구조
        $('.tbl_section').include('../ruler/tbl_section/tblarea.html');
        $('.tbl_section2').include('../ruler/tbl_section/tblarea2.html');

        // module
        $('.module_tab').include('../ruler/module/module_tab.html');
        $('.module_dscbx').include('../ruler/module/module_dscbx.html');
        $('.module_line').include('../ruler/module/module_line.html');
        $('.module_play').include('../ruler/module/module_play.html');
        $('.module_link').include('../ruler/module/module_link.html');

        // order
        $('.order_info_include').include('../ruler/order/order_info.html');
        $('.delivery_message_include').include('../ruler/order/delivery_message.html');
        $('.order_pay_include').include('../ruler/order/order_pay_type.html');
        $('.order_discount_include').include('../ruler/order/order_discount.html');
        $('.order_pay_type_m').include('../ruler/order/order_pay_type_m.html');
        $('.order_checkout_form_include').include('../ruler/order/order_checkout_form.html');

        // mypage
        $('.my_call').include('../ruler/mypage/my_call.html');
        $('.my_grade').include('../ruler/mypage/my_grade.html');
        $('.my_my').include('../ruler/mypage/my_my.html');
        $('.my_shop').include('../ruler/mypage/my_shop.html');
        $('.my_order').include('../ruler/mypage/my_order.html');
        $('.my_heart').include('../ruler/mypage/my_heart.html');
        $('.my_notice').include('../ruler/mypage/my_notice.html');
        $('.my_payment').include('../ruler/mypage/my_payment.html');
        // $('.my_payment_refund').include('../ruler/mypage/my_payment_refund.html');
        $('.my_step').include('../ruler/mypage/my_step.html');
        $('.my_step2').include('../ruler/mypage/my_step2.html');
        $('.my_process').include('../ruler/mypage/my_process.html');
        $('.my_return').include('../ruler/mypage/my_return.html');
        $('.my_delivery').include('../ruler/mypage/my_delivery.html');
        $('.detail_ordbx').include('../ruler/mypage/detail_ordbx.html');
        $('.stepbox').include('../ruler/mypage/stepbox.html');
    });
})(jQuery);
