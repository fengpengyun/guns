<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <#if html_keywords?has_content><meta name="keywords" content="${html_keywords}"></#if>
    <#if html_description?has_content><meta name="description" content="${html_description}"></#if>
    <#assign parentMenuName = (sri.screenUrlInfo.parentScreen.getDefaultMenuName())!"">
    <#assign defaultMenuName = sri.screenUrlInfo.targetScreen.getDefaultMenuName()>
    <title><#if html_title?has_content>${html_title}<#else><#if parentMenuName?has_content>${ec.resource.expand(parentMenuName, "")} - </#if><#if defaultMenuName?has_content>${ec.resource.expand(defaultMenuName, "")}</#if></#if></title>
    <link rel="apple-touch-icon" href="/MoquiLogo100.png"/>
<#-- Style Sheets -->
<#list sri.getThemeValues("STRT_STYLESHEET") as styleSheetLocation>
    <#if sri.buildUrl(styleSheetLocation).url != '#'>
        <link rel="stylesheet" href="${sri.buildUrl(styleSheetLocation).url}" type="text/css">
    </#if>
</#list>
<#list html_stylesheets?if_exists as styleSheetLocation>
    <#if sri.buildUrl(styleSheetLocation).url != '#'>
        <link rel="stylesheet" href="${sri.buildUrl(styleSheetLocation).url}" type="text/css">
    </#if>
</#list>
<#-- JavaScript -->
<#list html_scripts?if_exists as scriptLocation>
    <#if sri.buildUrl(scriptLocation).url != '#'>
        <script src="${sri.buildUrl(scriptLocation).url}" type="text/javascript"></script>
    </#if>
</#list>
<#list sri.getThemeValues("STRT_SCRIPT") as scriptLocation>
    <#if sri.buildUrl(scriptLocation).url != '#'>
        <script src="${sri.buildUrl(scriptLocation).url}" type="text/javascript"></script>
    </#if>
</#list>
<#-- Icon -->
<#list sri.getThemeValues("STRT_SHORTCUT_ICON") as iconLocation>
    <#if sri.buildUrl(iconLocation).url != '#'>
        <link rel="shortcut icon" href="${sri.buildUrl(iconLocation).url}">
    </#if>
</#list>
    <link rel="stylesheet" href="http://cdn.cocloud.cc/app.css" type="text/css">
</head>
<#assign bodyClassList = sri.getThemeValues("STRT_BODY_CLASS")>
<#assign instancePurpose = Static["java.lang.System"].getProperty("instance_purpose")!"production">
<body class="${instancePurpose} ${(ec.user.getPreference("OUTER_STYLE")!(bodyClassList?first))!"bg-light"} ${(sri.screenUrlInfo.targetScreen.screenName)!""}<#if hideNav! == "true"> hide-nav</#if>"><!-- try "bg-dark" or "bg-light" -->
