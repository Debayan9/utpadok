var dsmath={
    factor: function(num) { //create all factor of 'num' as array 'factor[]'
                        this.num = num;
                        n = this.num;
                        var m = 0;
                        factor = [];
                        for (var i = 0; i <= n / 2; i = i + 1) {
                                if (n % i == 0) {
                                        factor[m] = i;
                                        m = m + 1;
                                }
                        }
                        factor[m]=n;
            return factor;
                }
        }
