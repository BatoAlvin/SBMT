new Vue(
    {
    el: "#bulb",
    data: function(){
        return {
            isBulbon:false,
            isBulboff:true,
        }
    },
    
    methods:{
    showOrHide: function(){
        this.isBulbon = !this.isBulbon
        this.isBulboff = !this.isBulboff
        {

        }
    }
}
});