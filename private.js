var ans = (function(){
    var a = 123;

    return {
        getter: function(){
            console.log(a);
        },
        setter: function(val){
            a = val;
        }
    }

})