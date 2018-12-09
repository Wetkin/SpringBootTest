<#macro head css title='test'>
	<head>
        <title>${title}</title>

        <link rel="stylesheet" href="${urls.getForLookupPath('/dist/'+css+'.css') }">

    </head>
</#macro>



<!-- 页面脚本 -->
<#macro foot js>

		<script src="${urls.getForLookupPath('/dist/'+js+'.js') }" type="text/javascript"></script>
</#macro>