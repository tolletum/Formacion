<template>
    <div class="row">
        <div class="col-sm12">
            <h3>Quotes added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" ari-valueno="60" aria-valuemin="0" ria-valuemax="100"
                :style="{width: (quotesCount / maxQuotes * 100) + '%'}">
                    {{ quotesCount}} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['quotesCount', 'maxQuotes']    
    }
</script>