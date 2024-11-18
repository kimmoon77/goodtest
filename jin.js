       let coupon = parseInt(prompt("쿠폰 개수를 입력하시오"));
        document.write("쿠폰: " + coupon + "장<hr>");

        let travelBagCount = Math.floor(coupon / 20);
        coupon %= 20;

        let diaryCount = Math.floor(coupon / 10);
        coupon %= 10;

        if (travelBagCount > 0) {
            document.write("치킨+피자: " + travelBagCount + "개<br>");
        }
        if (diaryCount > 0) {
            document.write("치킨: " + diaryCount + "마리<br>");
        }

        document.write("콜라500ml: " + coupon + "개");
