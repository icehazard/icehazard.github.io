<script>
	import Select from './../atoms/Select.svelte';
    import Icon from "@iconify/svelte";
    import Field from "comp/atoms/TextField.svelte";

    let lang = 'ENG';
    let currency = 'THB';
    let theme = 'dark'

    let currencies = [
        {id: 'THB', name: 'Thai baht'},
        {id: 'EUR', name: 'Euro'},
        {id: 'USD', name: 'US Dollar'},
    ]

    let languages = [
        {id: 'ENG', name: 'English'},
        {id: 'TAI', name: 'Thai'},
        {id: 'RUS', name: 'Russian'},
    ]

    let themes = [
        {id: 'dark', name: 'Dark'},
        {id: 'light', name: 'Light'},
    ]

    function selected(item){
     
    }
    
</script>

<section class="grow col gap-20">
<h1 class="row pl-20 font-36 weight-300 align-center gap-20">
    <Icon icon="fluent:settings-16-regular" width="30" />
    <span>SETTINGS</span>
</h1>
<div class="grow col shade3 curve">
    <div class="row  w100 pa-20 space-between  shade3">
        <div class="row center gap-20">
            <Icon icon="fluent:translate-16-regular" width="30" />
            <div class="col gap-10">
                <span> Language</span>
                <span class="font-14 opacity-75">Change your prefered language</span>
            </div>
        </div>
        <div class="col">
            <Select init={lang} items={languages} on:select={selected}/>
        </div>
    </div>
    <hr />
    <div class="row  w100 pa-20 space-between  shade3">
        <div class="row center gap-20">
            <Icon icon="fluent:currency-dollar-euro-16-regular" width="30" />
            <div class="col gap-10">
                <span> Currency</span>
                <span class="font-14 opacity-75">Change your prefered currency</span>
            </div>
        </div>
        <div class="col">
            <Select  init={currency} items={currencies}  on:select={selected}/>
        </div>
    </div>
    <hr />
    <div class="row  w100 pa-20 space-between  shade3">
        <div class="row center gap-20">
            <Icon icon="fluent:dark-theme-20-filled" width="30" />
            <div class="col gap-10">
                <span>Theme</span>
                <span class="font-14 opacity-75">Change between light and dark mode</span>
            </div>
        </div>
        <div class="col">
            <Select  init={theme} items={themes}  on:select={selected}/>
        </div>
    </div>
    <hr />
</div>
</section>

