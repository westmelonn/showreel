const bgData = {
    ocean: {
        bg:"ocean",
        title:"海象災防資訊平台",
        tools:`jQuery、CSS、Codeigniter`,
        problem:"資料視覺化是一個大問題，不僅需圖表呈現，有些資料還需要顯示座標點位在地圖上。",
        solution:"以Leaflet為基底並使用它的API來顯示地圖，並且把資料也視覺化在地圖上，圖表的部分則是使用Echarts。",
        link:"https://ocean.cwb.gov.tw/"
    },
    official: {
        bg:"influx",
        title:"普匯金融科技官網",
        tools:"Vue、Vue-router、Vuex、Scss、Laravel",
        problem:"舊的網站是用WordPress架設的，但因公司需要由官網串API，因此決定重構。重構的同時還須保持網站的內容與SEO。",
        solution:"考慮到舊官網類似部落格文章的頁面，並且原本的效能並不是很好，因此我最後選擇前後端分離、渲染速度又快的SPA重構，雖會有SEO的問題，不過在router中使用history模式這個問題也解決了。",
        link:"https://www.influxfin.com/"
    },
    aiofficial:{
        bg:"aifinpitchtw",
        title:"金融科技協會官網",
        tools:"Vue、Vue-router、Vuex、Scss、Laravel",
        problem:"網站做完上線後，原本的流程臨時需再更改。",
        solution:"先讓做完的流程先上線使用，再趕快把新的需求趕出來，由於該流程的程式架構還算清晰有脈絡，因此也沒花很多時間。",
        link:"https://aifinpitchtw.com/"
    } ,
    jiangfloor:{
        bg:"jiangfloor",
        title:"騫閣地板商行",
        tools:"Vue、Vue-router、Scss、Laravel",
        problem:"由於跟外部合作的案子，因此需要一台VM來啟動apache服務，並且需要一個domain。",
        solution:"租了一台VM後並且把apache、npm、composer裝好後，順利啟動網站，也做了一個後台來讓業主可以隨時修改網站的內容。",
        link:"https://jiangfloor.com/"
    } ,
    shinsafeng: {
        bg:"shinsafeng",
        title:"欣三豐實業官網",
        tools:"Vue、Vue-router、Scss、Laravel",
        problem:"由於跟外部合作的案子，因此需要一台VM來啟動apache服務，並且需要一個domain。",
        solution:"租了一台VM後並且把apache、npm、composer裝好後，順利啟動網站，也做了一個後台來讓業主可以隨時修改網站的內容。",
        link:"https://shinsafeng.com/"
    },
}

export {
    bgData
}