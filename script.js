(function () {
  for (
    var namespacePart,
      internalNamespace,
      namespaceParts = ["Microsoft", "Maps"],
      mapsNamespace = window,
      i = 0;
    i < namespaceParts.length;
    ++i
  )
    (namespacePart = namespaceParts[i]),
      (mapsNamespace = mapsNamespace[namespacePart] =
        mapsNamespace[namespacePart] || {});
  mapsNamespace.toString = function () {
    return "Microsoft.Maps";
  };
  window.$MicrosoftMaps8 = mapsNamespace;
  internalNamespace = mapsNamespace.Internal = mapsNamespace.Internal || {};
  internalNamespace._PerfV2STime = Date.now() - 100;
  typeof sj_evt != "undefined" && sj_evt.fire("MapsProcessingStarted");
  internalNamespace.originalXMLHttpRequest =
    typeof Sarissa != "undefined" && Sarissa.originalXMLHttpRequest
      ? Sarissa.originalXMLHttpRequest
      : window.XMLHttpRequest;
  mapsNamespace.Internal._prefetchXsr = function (n, t, i) {
    for (var r, f = 0; f < n.mapTypeDefinitions.length; f++)
      if (n.mapTypeDefinitions[f].mapType === t) {
        r = n.mapTypeDefinitions[f].templateName;
        break;
      }
    if (r && !mapsNamespace.Internal._BaseMapTemplateSelector) {
      var o = mapsNamespace.GlobalConfig,
        s = o.dynamicProperties,
        e = i ? n.mapLiteTemplateUrlFormat : n.mapTemplateUrlFormat,
        l = n.mapTemplateUrlBase.replace(
          "{stlRequestDomain}",
          s.bingRequestDomain,
        );
      if (
        ((e = e
          .replace("{urlbase}", l)
          .replace("{protocol}", n.urlProtocol)
          .replace("{tfeDomainDynamic}", n.tfeDomainDynamic)
          .replace("{odmgenid}", s.compositionHandlerGenerationId)
          .replace("{subdomain}", "0")
          .replace("{jsonso}", r)
          .replace("{templateName}", r)
          .replace("{callback}", "Microsoft.Maps.NetworkCallbacks.normal")
          .replace("{stlVersion}", o.stlVersion)),
        typeof internalNamespace.originalXMLHttpRequest != "undefined")
      ) {
        window[r] = r;
        var h = "XsrPrefetchCallback",
          c = "XsrPrefetchErrorCallback",
          u = new internalNamespace.originalXMLHttpRequest();
        u.open("GET", e, !0);
        u.timeout = 25e3;
        u.onreadystatechange = function () {
          if (u.readyState === 4) {
            var n;
            if (u.status === 200)
              try {
                n = JSON.parse(u.responseText);
              } catch (t) {}
            n
              ? window[h]
                ? window[h](n, r)
                : (window[r] = n)
              : window[c]
              ? window[c](r)
              : delete window[r];
          }
        };
        u.send();
      }
    }
  };
  var TimeoutWrapper;
  (function () {
    function n(n, t) {
      return typeof n == "function"
        ? function () {
            try {
              return n.apply(null, t);
            } catch (i) {
              if (window.Microsoft && Microsoft.Maps)
                Microsoft.Maps.logger.logCriticalError(i);
              else throw i;
            }
          }
        : n;
    }
    function t(t, i) {
      var r = [].slice.apply(arguments).slice(2),
        u = n(t, r);
      return window.setTimeout(u, i);
    }
    function r(r) {
      for (var e, u = [], f = 1; f < arguments.length; f++)
        u[f - 1] = arguments[f];
      i
        ? ((e = n(r, u)), Promise.resolve().then(e))
        : ((u = [].slice.apply(arguments)),
          u.splice(1, 0, 0),
          t.apply(this, u));
    }
    function u(t, i) {
      var r = [].slice.apply(arguments).slice(2),
        u = n(t, r);
      return window.setInterval(u, i);
    }
    var i =
      typeof Promise != "undefined" &&
      Promise.toString().indexOf("[native code]") !== -1;
    window.Microsoft = window.Microsoft || {};
    window.Microsoft.Maps = window.Microsoft.Maps || {};
    Microsoft.Maps.setInterval = u;
    Microsoft.Maps.setTimeout = t;
    Microsoft.Maps.setAsync = r;
  })(TimeoutWrapper || (TimeoutWrapper = {}));
  var market = "en-IN";
  var coreConfig = {
    landmarkDealsUrl: "/maps/landmarkdeals?ypid={ypid}",
    vectorTileFeatures: "",
    vectorTileUrlFormat:
      "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?mkt={mkt}&it=Z,L&og={odmgenid}&cb={callback}&jsonso={jsonso}&js=1&ur={ur}&tj=1&lc={filter}&vpt=e,p,pg{srcparam}&cstl={cstl}",
    defaultMapType: "r",
    baseMapDataSourceLayersOfInterest: [
      "LandUse",
      "Coast",
      "Water",
      "BuildingFootprints",
      "Roads",
      "Boundaries",
    ],
    liteMode: true,
    mapTemplateUrlBase: "https://{stlRequestDomain}/maps/geotfe/comp/stl",
    mapTemplateUrlFormat:
      "{urlbase}?v={stlVersion}&tpp={templateName}&og={odmgenid}",
    mapLiteTemplateUrlFormat:
      "{urlbase}?v={stlVersion}&tpp={templateName}&og={odmgenid}",
    logServiceUrlFormat:
      "https://dev.virtualearth.net/webservices/v1/LoggingService/LoggingService.svc/Log?entry=0&fmt=1&type=3&group=MapControl&name={name}&version=v8&mkt={mkt}&auth={credentials}&jsonp={callback}",
    imageryCopyrightUrlFormat:
      "https://dev.virtualearth.net/REST/V1/Imagery/Copyright/{mkt}/{imagerySet}/{zoom}/{minLat}/{minLon}/{maxLat}/{maxLon}?output=json&dir={heading}&jsonp={callback}&jsonso={jsonso}&key={credentials}&ml={ml}&{cmnPltParam}",
    copyrightMapLayers: "B,BX",
    mapTypeDefinitions: [
      {
        mapType: "r",
        templateName: "097A0D85-2585-425A-8471-60BDD3C5B7C3",
        templateNameBing: "7DCFF932-3B97-4B3E-9EB4-5B9AA89EFA3C",
        data: [
          {
            id: "Microsoft.Maps.Imagery.RoadSceneWithoutLabels",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Road",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                tileFeaturesMapsVertical: "G,LC,BX,RL",
                tileFeaturesSDK: "G,LC,BX,RL",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam:
                  "mkt={mkt}&ur={ur}&it=Z,L,LA&og={odmgenid}&cstl={cstl}{srcparam}",
              },
              {
                imageryId: "Mercator",
                tileUrl:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEXr6eLDdclqAAAAH0lEQVR4Xu3AAQkAAADCMPunNsdhWxwAAAAAAAAAwAEhAAABg2UP5AAAAABJRU5ErkJggg==",
                minZoom: 1,
                maxZoom: 27,
                tileUrlParam: "",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteRoad",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Road",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&og={odmgenid}&n=z&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it={it2}&shading={shading}&n=z&og={odmgenid}{srcparam}",
                tileFeaturesMapsVertical: "G,LC,BX,L,LA",
                tileFeaturesSDK: "G,LC,BX,L",
                tileFeaturesWithoutLabel: "G,LC,BX,RL",
                labelPrimerUrlParam: "",
              },
              {
                imageryId: "Mercator",
                tileUrl:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEXr6eLDdclqAAAAH0lEQVR4Xu3AAQkAAADCMPunNsdhWxwAAAAAAAAAwAEhAAABg2UP5AAAAABJRU5ErkJggg==",
                minZoom: 1,
                maxZoom: 27,
                tileUrlParam: "",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "rd",
        cstlBing: "vb",
      },
      {
        mapType: "a",
        templateName: "7443EAC9-CD76-4236-B027-22DBC504BF06",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.Aerial",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Aerial",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 19,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it=A,G,RL&shading={shading}&n=z&og={odmgenid}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainStatic}/tiles/a{quadkey}.jpeg?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "g={synthviewgenid}&n=z&prx=1{srcparam}",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam:
                  "mkt={mkt}&ur={ur}&it=Z,L,LA&og={odmgenid}{srcparam}",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteAerial",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Aerial",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 19,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&og={odmgenid}&n=z{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainStatic}/tiles/a{quadkey}.jpeg?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam: "g={synthviewgenid}&n=z{srcparam}",
                tileFeaturesMapsVertical: "A,G,L,LA",
                tileFeaturesSDK: "A,G,L",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 19,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: ["h"],
        cstl: "",
        cstlBing: "",
      },
      {
        mapType: "be",
        templateName: "7443EAC9-CD76-4236-B027-22DBC504BF06",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.Birdseye",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Synth",
                tileUrl:
                  "{protocol}://{tfeDomainStatic}/tiles/cmd/svhybrid?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "a={quadkey}&dir={dir}&n=z&g={synthviewgenid}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainStatic}/tiles/svi{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam: "g={synthviewgenid}&dir={dir}&n=z",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        mapTypeEnabled: true,
        alternateMapTypes: ["b", "o"],
        cstl: "",
        cstlBing: "",
      },
      {
        mapType: "x",
        templateName: "097A0D85-2585-425A-8471-60BDD3C5B7C3",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Roads",
            vectorLayerId: "Roads",
            imageryScenes: [],
            zIndex: 6000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "",
        cstlBing: "",
      },
      {
        mapType: "m",
        templateName: "097A0D85-2585-425A-8471-60BDD3C5B7C3",
        templateNameBing: "7DCFF932-3B97-4B3E-9EB4-5B9AA89EFA3C",
        data: [
          {
            id: "Microsoft.Maps.Imagery.Mercator",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Mercator",
                tileUrl:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEXr6eLDdclqAAAAH0lEQVR4Xu3AAQkAAADCMPunNsdhWxwAAAAAAAAAwAEhAAABg2UP5AAAAABJRU5ErkJggg==",
                minZoom: 1,
                maxZoom: 27,
                tileUrlParam: "",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
        ],
        minZoom: 1,
        maxZoom: 21,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "",
        cstlBing: "",
      },
      {
        mapType: "cg",
        templateName: "DCD31B1C-B637-4B36-8635-829DF5E46999",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.GrayscaleRoad",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "RoadOnDemand",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "G,RL",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteGrayScale",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "RoadOnDemand",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&og={odmgenid}&n=z&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it=G,BX,RL&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "G,L",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "cg",
        cstlBing: "",
      },
      {
        mapType: "wd",
        templateName: "68C27B9C-4FB4-4CEC-A664-3FC3C2E8A12A",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.CanvasDark",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "CanvasDark",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "G,RL",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteCanvasDark",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "CanvasDark",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&og={odmgenid}&n=z&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it=G,BX,RL&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "G,L",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "wd",
        cstlBing: "",
      },
      {
        mapType: "wl",
        templateName: "DC2B2930-4CA4-45EB-9EE9-3F4EFA4267E5",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.CanvasLight",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "CanvasLight",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "G,BX,RL",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteCanvasLight",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "CanvasLight",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&og={odmgenid}&n=z&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it={it2}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "G,BX,L",
                tileFeaturesWithoutLabel: "G,BX,RL",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "wl",
        cstlBing: "",
      },
      {
        mapType: "hc",
        templateName: "A3A1C843-30CE-4828-984C-AD44EAF2A245",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.HighContrast",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Road",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "G,BX,RL",
                tileFeaturesSDK: "G,BX,RL",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam:
                  "mkt={mkt}&ur={ur}&it=Z,L,LA&og={odmgenid}&cstl={cstl}{srcparam}",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteHighContrast",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Road",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&shading={shading}&og={odmgenid}&n=z&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it={it2}&shading={shading}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                tileFeaturesMapsVertical: "G,BX,L,LA",
                tileFeaturesSDK: "G,BX,L",
                tileFeaturesWithoutLabel: "G,BX,RL",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "hc",
        cstlBing: "",
      },
      {
        mapType: "d",
        templateName: "F83F2201-05FD-4BFF-8700-07CEEF51C66B",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.RoadDark",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Road",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "G,LC,BX,RL",
                tileFeaturesSDK: "G,RL",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
              {
                imageryId: "Mercator",
                tileUrl:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEUgICAx3X9QAAAAH0lEQVRo3u3BAQ0AAADCIPunNsc3YAAAAAAAAAAAcQchAAABp1cp1wAAAABJRU5ErkJggg==",
                minZoom: 1,
                maxZoom: 27,
                tileUrlParam: "",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
          {
            id: "Microsoft.Maps.Imagery.LiteRoadDark",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "Road",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 20,
                tileUrlParam:
                  "mkt={mkt}&ur={ur}&it={it}&og={odmgenid}&n=z&cstl={cstl}{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam:
                  "mkt={mkt}&ur={ur}&it=G,BX,RL&n=z&og={odmgenid}&cstl={cstl}{srcparam}",
                tileFeaturesMapsVertical: "G,LC,BX,L,LA",
                tileFeaturesSDK: "G,L",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
              {
                imageryId: "Mercator",
                tileUrl:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEUgICAx3X9QAAAAH0lEQVRo3u3BAQ0AAADCIPunNsc3YAAAAAAAAAAAcQchAAABp1cp1wAAAABJRU5ErkJggg==",
                minZoom: 1,
                maxZoom: 27,
                tileUrlParam: "",
                bounds: "",
                tileUrlWithoutLabel: "",
                tileUrlWithoutLabelParam: "",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
            liteMode: true,
          },
          {
            id: "Microsoft.Maps.BaseVectorData",
            vectorLayerId: "BaseVectorData",
            imageryScenes: [],
            zIndex: 1000,
          },
        ],
        minZoom: 1,
        maxZoom: 20,
        liteModeAware: true,
        mapTypeEnabled: true,
        alternateMapTypes: [],
        cstl: "vbd",
        cstlBing: "",
      },
      {
        mapType: "be2",
        templateName: "7443EAC9-CD76-4236-B027-22DBC504BF06",
        templateNameBing: "",
        data: [
          {
            id: "Microsoft.Maps.Imagery.BirdseyeV2",
            vectorLayerId: "",
            imageryScenes: [
              {
                imageryId: "BirdseyeV2",
                tileUrl:
                  "{protocol}://{tfeDomainDynamic}/comp/ch/{base4SceneId}01{birdseyeV2Quadkey}?{tileUrlParam}",
                minZoom: 1,
                maxZoom: 22,
                tileUrlParam: "og={odmgenid}&go=be.{beGenId}&it=BE,L{srcparam}",
                bounds: "",
                tileUrlWithoutLabel:
                  "{protocol}://{tfeDomainStatic}/tiles/be{base4SceneId}01{birdseyeV2Quadkey}?{tileUrlWithoutLabelParam}",
                tileUrlWithoutLabelParam: "g={beGenId}",
                tileFeaturesMapsVertical: "",
                tileFeaturesSDK: "",
                tileFeaturesWithoutLabel: "",
                labelPrimerUrlParam: "",
              },
            ],
            visible: true,
          },
        ],
        minZoom: 1,
        maxZoom: 22,
        mapTypeEnabled: true,
        alternateMapTypes: ["g"],
        cstl: "",
        cstlBing: "",
      },
    ],
    logFlushIntervalInSeconds: 3,
    instrumentationUrl: "{origin}/fd/ls/lsp.aspx",
    logClientInstRequestFormatString:
      "<ClientInstRequest><Events>{Events}</Events></ClientInstRequest>",
    logClientInstEventFormatString:
      "<E><T>{EventType}</T><IG>{ImpressionGUID}</IG><TS>{TimeStamp}</TS><D><![CDATA[{DATA}]]></D></E>",
    aerialCutOffZoom: 12,
    locateMeViewExpirationDays: 35,
    locateMeHighAccuracyMeters: 200,
    locateMeFormCode: "S00031",
    bingSettingsUrl: "{origin}/account/general?ru={returnUrl}&FORM={formCode}",
    defaultZoomLevel: 11.0,
    basemapDataMinZoom: 1,
    basemapDataMaxZoom: 22,
    landmarksMinZoom: 12,
    landmarksMaxZoom: 22,
    landmarksDataSourceLayersOfInterest: ["Landmark"],
    cityPolygonDataSourceLayersOfInterest: ["Boundaries"],
    serverInstrumentationUrlFormat:
      "{origin}/maps/instrumentation?q={q}&feature={f}",
    landmarksLayerId: "Microsoft.Maps.Landmarks",
    landmarksVectorLayerId: "Landmark",
    landmarksLayerZIndex: "8050",
    elevationServiceUrl:
      "https://dev.virtualearth.net/REST/v1/Elevation/BoundingRect/{south},{west},{north},{east}/20/20?jsonp={callback}&key={credentials}&{cmnPltParam}",
    enablePoiPrimer: true,
    cityPolygonUrlFormat:
      "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?og={odmgenid}&cb={callback}&jsonso={jsonso}&js=1&it=z,e&eid={entityId}{srcparam}",
    cityPolygonLayerId: "Microsoft.Maps.Boundaries",
    cityPolygonVectorLayerId: "Boundaries",
    cityPolygonLayerZIndex: 8100,
    enableMapStyleSelector: true,
    vectorOSTileUrlFormat:
      "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?mkt={mkt}&it=Z,OS,L,LA&og={odmgenid}&cb={callback}&jsonso={jsonso}&js=1&ur={ur}&tj=1&lc={filter}&vpt=e,p,pg{srcparam}&cstl={cstl}",
    vectorStreetsideTileUrlFormat:
      "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?mkt={mkt}&it=Z,L,LA&og={odmgenid}&cb={callback}&jsonso={jsonso}&js=1&ur={ur}&tj=1&lc={filter}{srcparam}",
    mapcontrolVersion: "release1",
    allowHybridHighDpi: true,
    useOverlayQuadrants: true,
    urlProtocol: "https",
    tfeDomainDynamic: "t.ssl.ak.dynamic.tiles.virtualearth.net",
    tfeDomainStatic: "t.ssl.ak.tiles.virtualearth.net",
    maxConcurrentNetworkRequest: 50,
    maxConcurrentNetworkRequestPerDomain: 50,
    copyrightTermsLinkUrl:
      "https://www.microsoft.com/maps/assets/docs/terms.aspx",
    autoGenBaseMapJsonso: true,
    birdseyeV2MetadataUrl:
      "{protocol}://{tfeDomainStatic}/tiles/cmd/BirdsEyeSceneMetaData?north={north}&south={south}&east={east}&west={west}&count=100&g={genId}&dir=&ver=0",
    beV2ImageryCopyrightUrlFormat:
      "https://dev.virtualearth.net/REST/V1/Imagery/Copyright/{mkt}/{productId}?jsonp={callback}&jsonso={jsonso}&key={credentials}&{cmnPltParam}",
    birdseyeV2PlaceHolderTileUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEVZYFxiaWO92NjlAAAA9klEQVR4Xu3aSwqDMBiAQcWDe7QepUdw6ULMLz4fFIugIMJkFRS+jUNIgtnlUX6+Vd20KaZJ7CbRj/ndMFmexDjWwOEkfh5tkmcC6U/8noDA1eErCIAkANLLAyCBJACSAEgCIHEAEkgCIAmAJAASByCBJACSAEgCIOUcCFiRbgoIgCQAkgBIHIAEkgBIAiAJuEfiACQrkgBIAiAJ2CNxABJIAiAJgCQAUsEBBw5dAiAJgPREQAAkAZAEQOIAJJAE3CcKWJEEQOIAJJAE7JEEQOIAJJAEQBLwO5GAUxsHIIEkAJKAzbYASByABJIASALukQSsSBwIdOrK7oWB8fHjAAAAAElFTkSuQmCC",
    isBirdseyeV2SDKDefault: true,
    venueMapEntityExploreUrl:
      "/entityexplore?q={name}&ypid={ypid}&cp={latLong}&eeptype=EntityFull",
    useClassicSdkPoi: true,
    geoDataAPIEndpoint:
      "https://ak.spatial.virtualearth.net/rest/v1/data/geodata?SpatialFilter=GetBoundary({location},{lod},'{entityType}',{getAllPolygons},{getEntityMetaData},'{culture}','{userRegion}')&jsonp={callback}&$format=json&key={credentials}&{cmnPltParam}",
    geoDataAPISDKEndpoint:
      "https://sdk.virtualearth.net/geo/spatial/v1/public/Geodata?SpatialFilter=GetBoundary({location},{lod},'{entityType}',{getAllPolygons},{getEntityMetaData},'{culture}','{userRegion}')&jsonp={callback}&$format=json&key={credentials}&{cmnPltParam}",
    geoEntityDataAPIEndpoint:
      "https://ak.spatial.virtualearth.net/rest/v1/data/geodata?$filter=GetEntity({entityId}L,{lod},{getEntityMetaData},'{culture}','{userRegion}')&$format=json&key={credentials}&preferCuratedPolygons=1&{cmnPltParam}",
    postCodeMinLabelZoom: 11,
    postCodeMinPushpinZoom: 14,
    postCodeMaxHoverClickZoom: 15,
    enableClientInstrumentationIG: true,
    primitivesHoverDelay: 50,
    catMapUrlFormat: "{urlbase}?ctpv={ctpVersion}&og={odmgenid}",
    passReferrer: true,
    enforceReferrerPolicy: true,
    be2PolygonFix: true,
    sdkSearchBarUrlTemplate:
      "https://www.bing.com/maps?q={q}&filters={filters}&FORM={formCode}",
    sdkSearchBarUrlFormCode: "",
    mapLabelFormCode: "",
    maxDragonflyResourceRetry: 2,
  };
  internalNamespace._CoreConfig = function () {
    return coreConfig;
  };
  mapsNamespace.GlobalConfig = {
    features: {
      directions: {
        isEnabled: true,
        calculateRouteServiceUrl:
          "https://dev.virtualearth.net/REST/v1/Routes/{travelMode}?key={app_key}&o=json&jsonp={callback}&fi=true&errorDetail=true&{cmnPltParam}&",
        calculateTruckRouteServiceUrl:
          "https://dev.virtualearth.net/REST/v1/Routes/Truck?key={app_key}&{cmnPltParam}",
        applicationKey: "",
        maxRoutes: 3,
        maxDriveWaypoints: 25,
        maxTransitWaypoints: 2,
        maxWalkWaypoints: 25,
        unit: 2,
        roadShieldServiceUrlFormat:
          "https://ecn.dev.virtualearth.net/mapcontrol/roadshield.ashx?bucket={bucket}&shield={shield}&label={label}",
        enableTransitMode: true,
        defaultMode: 1,
        optimize: 3,
        routeLayerZIndex: 9100,
        maxViaPoints: 10,
        enablePredictiveRouting: true,
        specialAttributionLink: "www.thetrainline.com",
        enableUpdateDirectionsOnSelection: true,
        enableFocusToWaypointOnAddClick: true,
        displayTraffic: true,
        transitModeFilter: true,
        enableRoadShieldIconXsr: true,
        maxWalkingDistance: 100,
        transitOBDLEnabled: true,
        enableNewDiretionsAnswerAlert: true,
        enableBestModeItineraryGroups: true,
        routeInfoPinRtl: true,
        transitAppUrl: "sapphire://miniApp?id=d54ba00c1f5242d2a43be1e5b3e67546",
        shortURLServiceUrl: "https://www.bing.com/maps/shorturl/{action}",
      },
      calendar: {
        featureType: "Calendar",
        isEnabled: true,
        gCalApiSource: "https://apis.google.com/js/client.js",
        gCalClientId:
          "967526985858-mslsiichb85bm4lj0f2eu1du5ted368j.apps.googleusercontent.com",
        gCalScopes: "https://www.googleapis.com/auth/calendar",
        gCalVersion: "v3",
        defaultPermalink: "/maps",
        enableCalendarSync: true,
        saveIntoCalendar: true,
        showCalendar: true,
        authorizationEndpointBase: "https://login.microsoftonline.com/",
        authorizationEndpoint: "common/oauth2/v2.0/authorize?",
        apiEndpoint: "https://outlook.office.com/api/v2.0",
        emailEndpoint: "https://www.bing.com/maps/email",
        authorizationRedirectUrl: "https://www.bing.com/maps/auth",
        appId: "cc06fe78-ec8b-4d09-a525-a4f1fcb3ab03",
        scopes: "openid+https://outlook.office.com/calendars.readwrite",
        formCode: "BMCAL1",
      },
      collections: {
        featureType: "Collections",
        isEnabled: true,
        maxAllowedCollections: 300,
        maxAllowedCollectionEntities: 1000,
        maxTimeout: 10,
        clientGraphUseProd: true,
        returnMockFavorites: "",
        enablePolyshapes: true,
        tabCreatorUrl: "/maps/tabCreator/?tabnames={names}",
        cgApiRequestOrigin: "BingMapsVertical",
        cgApiSchemaVersion: "1.0",
        cgApiUrl: "/CloudGraph/Collection/v1",
        retrieveAllCollectionsBag: "",
        retrieveCollectionBag: "",
        insertCollectionBag: "",
        updateCollectionBag: "",
        updateCollectionMetaBag: "",
        insertItemBag: "",
        deleteCollectionBag: "",
        deleteItemBag: "",
        emptyCollectionsBag: "",
        testUser: "",
        filteredEvents: "",
        retrieveAllItinerariesBag: "",
        retrieveItineraryBag: "",
        insertItineraryBag: "",
        updateItineraryBag: "",
        updateItineraryMetaBag: "",
        insertItineraryItemBag: "",
        deleteItineraryBag: "",
        deleteItineraryItemBag: "",
        enableSignedOutRefresh: true,
        wideCardWidth: 758,
        twoColumnCardWidth: 509,
        contributionsCardWideWidth: 732,
        contributionsCardWidth: 464,
        thumbnailImageWidth: 336,
        thumbnailImageHeight: 188,
        maxNearbyDistance: 40000,
        nearHomeWorkDistance: 10000,
        minimumClusterSize: 4,
        maxIterations: 12,
        minThreeColumnMyPlacesWidth: 1550,
        newCardSizeTCF: true,
        imageSizes: [122, 124, 236, 244, 248],
        entityCardSizes: [236, 244, 248],
        useJsonApiForFavorites: true,
        enableSingleMyPlacesCard: true,
        enableOneClickSave: true,
        getMyContributionsURL:
          "/local/ugc/getusercontribution?count=100&first=0&filters=contribution_type%3A%22{0}%22%20sort_by%3A%22{1}%22%20sort_order%3A%22{2}%22",
        deleteMyContributionsUrl:
          "/local/ugc/deleteusercontribution?contributionId={0}",
        getMyRewardsUrl: "",
        hidePoints: true,
        commuteRewardsBaseUrl: "/maps/rewards/commutePoints",
        rewardsDashboardUrl: "https://rewards.microsoft.com/",
        rewardsPointsBreakdownUrl:
          "https://rewards.microsoft.com/pointsbreakdown",
        rewardsCommutePromotionUrl: "/maps/rewards/promoAvailable",
        commuteRewardsJoinUrl: "/maps/rewards/joinAndAward",
        commuteRewardsPointValue: 100,
        rewardsTermsUrl: "https://www.microsoft.com/{market}/servicesagreement",
        rewardsPrivacyUrl:
          "https://privacy.microsoft.com/{market}/privacystatement",
      },
      aerial: { featureType: "Aerial", isEnabled: true },
      ordnanceSurvey: { featureType: "OrdnanceSurvey" },
      streetsideMobileV2: { featureType: "StreetsideMobileV2" },
      disableImageCORS: { featureType: "DisableImageCORS" },
      birdseyeV2UI: { featureType: "BirdseyeV2UI", isEnabled: true },
      supportedMaps: { featureType: "SupportedMaps" },
      venueMap: {
        featureType: "VenueMap",
        isEnabled: true,
        minVisibleZoom: 16,
        urlHost: "dev.virtualearth.net",
        urlPathRoot: "REST/v1/JsonFilter/VenueMaps",
        metadataUrl:
          "https://{host}/{pathroot}/data/{venueMapId}?view=*&key={credentials}&jsonp={callback}&{cmnPltParam}",
        categoryToBucketUrl:
          "https://{host}/{pathroot}/dataraw/categorytobucket?jsonp={callback}&key={credentials}&{cmnPltParam}",
        footprintTileLOD: 10,
        footprintTileUrl: "",
        footprintMinZoom: 16,
      },
      mobileMyPlaces: { featureType: "MobileMyPlaces" },
      mobileMapShell: {
        featureType: "MobileMapShell",
        listItemRequestCount: 15,
        listItemRequestCountOverride: {
          house: 285,
          91572: 285,
          13344: 285,
          hotel: 285,
          vacationRental: 285,
        },
        maxListItemCount: 250,
        infiniteScrollBuffer: 0.9,
        entityDetailsUrlTemplate:
          "/entityexplore?q={query}&{idParam}&mmshell=1",
        queryFallbackUrlTemplate: "/search?q={query}",
        preloadAllPOIsSegments: [
          "House",
          "91572",
          "13344",
          "Hotel",
          "VacationRental",
        ],
        writeUserLocCookieEnabled: true,
      },
      streetside: {
        featureType: "Streetside",
        streetsideMetadataGenIdUrl:
          "http://dctfeint.pvt.maps.glbdns2.microsoft.com/tiles/imggen?g={ipsgenid}&imagetype=hsms",
        streetsideImageryGenIdUrl:
          "http://dctfeint.pvt.maps.glbdns2.microsoft.com/tiles/imggen?g={ipsgenid}&imagetype=hs",
        getBubblesByLocationRectUrlFormat:
          "https://t.ssl.ak.tiles.virtualearth.net/tiles/cmd/StreetSideBubbleMetaData?count={bubbleCount}&north={north}&south={south}&east={east}&west={west}&key={credentials}&g={hsmsgenid}",
        getBubblesByIdUrlFormat:
          "https://t.ssl.ak.tiles.virtualearth.net/tiles/cmd/StreetSideBubbleMetaData?id={id}&key={credentials}&g={hsmsgenid}",
        reportAProblemUrlFormat:
          "https://www.bing.com/maps/streetsideprivacyreport?bubbleid={id}",
        coverageLayerTileUrlFormat:
          "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?mkt={mkt}&it=Z,HC&og={odmgenid}{srcparam}",
        tileUrlFormat:
          "{protocol}://{tfeDomainStatic}/tiles/hs{quadkey}.jpg?g={hsgenid}&n=z&key={credentials}{srcparam}",
        maxNumberOfBubblesToCache: 200,
        coverageLayerZIndex: 1001,
        defaultNumberOfBubblesToRequest: 50,
        autoEntryAllowed: true,
        zoomInAnimationTargetZoomLevel: 19,
        zoomInAnimationMillisecondsPerZoomLevel: 500,
        bubbleSourceBubbleLimit: 1000,
        overviewMapLOD: 16,
        minLookupsMeters: [50, 25, 15, 10],
        maxZoomForSS: 20,
        bubbleTransitionTime: 400,
        directionsBubbleTransitionTime: 50,
        directionsViewportWidth: 456,
        directionsViewportHeight: 456,
        directionsMaximumAngleDifferenceToConsiderTwoAnglesSimilar: 45,
        directionsMinimumDistanceFromBubbleLocationToLookAtLocationInMeters: 10,
        minimumDirectionsBubbleDistanceFromIntersectionInMeters: 10,
        optimalDirectionsBubbleDistanceFromIntersectionInMeters: 30,
        localDetailsMaximumDistanceInMetersBetweenBubbleAndEntity: 100,
        directionsOverlayMapTileUrlFormat:
          "https://dev.virtualearth.net/REST/v1/Imagery/Map/{mapStyle}/{latitude},{longitude}/19?mapSize={width},{height}&key={credentials}&{cmnPltParam}",
        cursorSwapDelayTimeInMilliseconds: 1500,
        navigationControlClickRegionAdjustment: 50,
        navigationControlHalfAllowableSimilarAngle: 30,
        coverageLayerOpacity: 0.5,
        setViewAnimationMillisecondsForStreetsideMini: 300,
        photosynthProxyUrlFormat:
          "//photosynth.net/jsonproxy.psfx?jsonUrl={uriEncodedUrl}&jsCallback={callback}",
        overviewMapMapType: "r",
        httpsOverrideListUrl:
          "https://ssl-cdn.ps1.photosynth.net/httpsOverrideList.json",
        streetsideCursorSize: 256,
        streetsideLabelFont: "60pt SegoeBing",
        vectorLabelWithGeometryUrl:
          "{protocol}://{tfeDomainDynamic}/comp/ch/{quadkey}?mkt={mkt}&ur={ur}&it=G,L&og={odmgenid}&js=1&vpt=e,l&cstl=vb{srcparam}&aae=1&cb={callback}&jsonso={jsonso}",
      },
      traffic: {
        featureType: "Traffic",
        isEnabled: true,
        trafficUriFormat:
          "https://t0-traffic.tiles.virtualearth.net/comp/ch/{quadkey}?it=Z,TF&n=z&key={credentials}{srcparam}",
        trafficLayerZIndex: 3000,
        incidentsUrlFormat:
          "https://dev.virtualearth.net/REST/v1/Traffic/Incidents/{bounds}/?severity={sev}&key={credentials}&o=json&jsonp={callback}&{cmnPltParam}",
        incidentsLayerZIndex: 9500,
        incidentsLayerRefreshInterval: 180000,
        minZoomLevelToShowIncidents: 7,
        minZoomForMinorIncidents: 10,
        minZoomForLowImpactIncidents: 12,
        minZoomForAllCameras: 12,
        cameraByLocationUrlFormat:
          "https://dev.virtualearth.net/REST/v1/Traffic/Incidents/{bounds}/?key={credentials}&o=json&jsonp={callback}&includeItems=cameras&{cmnPltParam}",
        cameraUrlFormat:
          "https://ecn.dev.virtualearth.net{imageUrl}&key={credentials}&{cmnPltParam}&animated=true",
        trafficTileCacheDuration: 180000,
        defaultTrafficLayerOpacity: 1.0,
        defaultTrafficLayerOpacityLiteMode: 0.7,
        trafficIncidentV2Enabled: true,
        cameraAnimationEnabled: true,
        cameraAnimationAutoPlay: true,
      },
      taskFramework: {
        featureType: "TaskFramework",
        isEnabled: true,
        defaultZoomLevel: 16,
        approximateLocationZoomLevel: 13,
        microPoiRequestUrlFormat:
          "https://t{subdomain}-micropoi.ssl.ak.tiles.virtualearth.net/mpoi/MicroPoi/{quadkey}.json?q={query}&filter=&jsonp={callback}&jsonso={jsonso}&output=json&ll=true",
        zoomLevelThresholdForChangingMapView: 3,
        zoomLevelThresholdForChangingMapViewForPolygon: 2,
        mapViewDistanceThreshold: 50,
        zoomLevelThresholdForSinglePoi: 4,
        autoRefreshDelayInMs: 150,
        distanceRequiredInPixelsForAutoRefresh: 100,
        canCardColorFade: true,
        topPrimitiveIndexForResults: 2,
        slideoutMinWidth: 1176,
        newMicroPoiEnabled: true,
        newMicroPoiRequestUrlFormat:
          "https://www.bingapis.com/api/v7/micropoi?tileId={quadkey}&q={query}&chainid={chainId}&categoryid={categoryId}&appid=5BA026015AD3D08EF01FBD643CF7E9061C63A23B",
        defaultCardWidth: 360,
        maxPolygonZoomLevel: 20,
        enableNewActionBarButtons: true,
        customScrollbar: true,
        newCardSizingForTCF: true,
        showLoadingSkeleton: true,
        defaultSkeletonWidth: 360,
        nearbyButtonEnabled: true,
        nearbyListingButtonsEnabled: true,
        nearbyDistanceMatrixProxyURL:
          "/maps/DistanceMatrix?origins=${lat},${lng}&destinations=${destinations}&skey=${key}",
        enableMyContributions: true,
        enableBoldUXChanges: true,
        minimumMapWidth: 150,
        isMapPeek: true,
        showWoW: true,
        woWRequestUrl:
          "https://services.bingapis.com/npswowweb/wownps?npsid=8F15ECD5-EB22-48AF-9FDA-8FD3E8AFC6F0&setlang={lang}&impressionId={ig}&muid={cid}&isAADAuthenticatedBingUser={isAAD}&isBnpNotificationShown=false",
      },
      mapDelay: {
        featureType: "MapDelay",
        isEnabled: true,
        reverseGeocodeRequestUrlFormat:
          "https://dev.virtualearth.net/REST/v1/Locations/{latitude},{longitude}?o=json&jsonp={callback}&key={session_key}&includeEntityTypes={includeEntityTypes}&inclnb={neighborhood}&incl={incl}&{cmnPltParam}",
        geocodeRequestUrlFormat:
          "https://dev.virtualearth.net/REST/v1/Locations/?q={query}&o=json&jsonp={callback}&key={session_key}&maxResults={maxResults}&userMapView={userMapView}&inclnb={neighborhood}&incl={incl}&{cmnPltParam}",
        geolocationTimeout: 10000,
        geolocationMaxAge: 300000,
        boundingBoxRequestUrlFormat:
          "//dev.virtualearth.net/REST/v1/Locations?key={session_key}&output=json&jsonp={callback}&query={query}&{cmnPltParam}",
        enableCopyLinkInContextMenu: true,
        enableAutoCopyToClipboard: true,
        geochainAutosizeMaxWidth: 900,
        devParamsList: [],
      },
      labels: {
        featureType: "Labels",
        isEnabled: true,
        useSegoeFontStack: true,
        nonItalicLabelLanguages: "zh,ja",
        textureMulti: 8,
        staticLandmarks: true,
        ignoreStrata: true,
        iconTextYAdjust: 0.05,
      },
      autosuggest: {
        featureType: "Autosuggest",
        isEnabled: true,
        searchBoxContainerID: "maps_sb_container",
        searchBoxID: "maps_sb",
        autoSuggestContainerID: "maps_as_container",
        searchBoxSubmitButtonID: "sb_form_go",
        autoSuggestMaxResults: 5,
        autoSuggestServiceHostUrlFormat:
          "https://{BingHostName}/api/v6/Places/AutoSuggest",
        autoSuggestServiceUrlFormat:
          "{host_url}?q={query}&appid={appid}&mv8cid={conversation_id}&mv8ig={ig}&localMapView={local_map_view}&localcircularview={user_location}&count={max_results}&structuredaddress=true&types={suggestionTypes}&setmkt={market}&setlang={lang}&histcnt={histcnt}&favcnt={favcnt}",
        focusInSearchBox: true,
        searchTextFormat: "",
        sdkAutosuggestAppid: "F2DD9E3AA45F7512D9C6CA9A150CBA7F76556B81",
        autosuggestAppid: "D41D8CD98F00B204E9800998ECF8427E1FBE79C2",
        autosuggestDirectionsMaxResults: 5,
        autosuggestDirectionsMaxHistCount: 5,
        autosuggestDirectionsMaxFavCount: 3,
        showXSRIcons: true,
        autosuggestSearchBoxMaxResults: 5,
        inPrivateLink: "/account/general?ru={0}&FORM=O2HV65",
      },
      locateMe: { featureType: "LocateMe", isEnabled: true },
      localSearch: {
        featureType: "LocalSearch",
        isEnabled: true,
        requestUrlFormat:
          "/maps/overlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&mapcardtitle={title}&appid={appid}&p1=[AplusAnswer]",
        localFilterFormat: 'local_ypid:"{ypid}"',
        entityFilterFormat: 'sid:"{sid}"',
        vdpIdFilterFormat: 'local_vdpid:"{vdpid}"',
        eventFilterFormat:
          'eventId:"{eventId}" eventParentId:"{eventParentId}" latlong:"{latlong}" location:"{city}"',
        polygonEntityScenarios: ["7", "9", "24", "25", "27", "28", "29", "33"],
        singleEntityScenarios: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "6",
          "7",
          "8",
          "9",
          "10",
          "12",
          "23",
          "24",
          "25",
          "27",
          "28",
          "29",
          "31",
          "32",
          "33",
          "39",
          "41",
          "42",
          "43",
          "45",
          "46",
          "47",
          "49",
          "50",
        ],
        multiEntityScenarios: [
          "5",
          "11",
          "34",
          "35",
          "36",
          "37",
          "38",
          "40",
          "44",
          "52",
          "54",
          "55",
        ],
        directionsIntentDrivingScenarios: ["13", "14", "15", "53"],
        directionsIntentTransitScenarios: ["16", "17", "18"],
        directionsIntentWalkingScenarios: ["19", "20", "21"],
        trafficIntentScenarios: ["22", "30"],
        itineraryDetailsIntentScenarios: ["48"],
        itineraryListingsIntentScenarios: ["51"],
        isMapsLocationEnabled: true,
        scenarioKeys: {
          0: "ERR",
          1: "RS",
          2: "HS",
          3: "RTS",
          4: "LS",
          5: "MB",
          6: "AT",
          7: "PL",
          8: "LO",
          9: "CT",
          10: "GE",
          11: "LHM",
          12: "LLS",
          13: "DA_DDP",
          14: "DA_DDA",
          15: "DA_DDB",
          16: "DA_DTP",
          17: "DA_DTA",
          18: "DA_DTB",
          19: "DA_DWP",
          20: "DA_DWA",
          21: "DA_DWB",
          22: "MA_TRFC",
          23: "MA_ADDR",
          24: "MA_MAPS",
          25: "MA_PLAC",
          27: "MA_MNTY",
          28: "MA_PNTY",
          29: "MA_BDIE",
          30: "MA_TFCE",
          31: "MA_ADDE",
          32: "LRS",
          33: "ELG",
          34: "LERC",
          35: "LCMA",
          36: "LCL",
          37: "ELCV2",
          38: "EIC",
          39: "ELP",
          40: "LEL",
          41: "EIP",
          42: "EMS",
          43: "GDA",
          44: "LCC",
          45: "EWG",
          46: "LHS",
          47: "EIG",
          48: "BTVI",
          49: "EAIA",
          50: "ELN",
          51: "BTVIL",
          52: "LED",
          53: "DA_DOL",
          54: "EWC",
          55: "LTS",
        },
        searchNearbyDefaultZoomLevel: 16.0,
        searchNearbyDefaultSuggestions: [
          "L_SearchNearbyTerm_1:L_SearchNearbyCategoryId_1",
          "L_SearchNearbyTerm_2:L_SearchNearbyCategoryId_2",
          "L_SearchNearbyTerm_3:L_SearchNearbyCategoryId_3",
          "L_SearchNearbyTerm_4:L_SearchNearbyCategoryId_4",
          "L_SearchNearbyTerm_5:L_SearchNearbyCategoryId_5",
          "L_SearchNearbyTerm_6:L_SearchNearbyCategoryId_6",
        ],
        formCodeMonitr: "MONITR",
        reportAsNotFoundKeys: ["ERR"],
        reportAsMultiBusinessKeys: [
          "MB",
          "LHM",
          "LERC",
          "LCMA",
          "LCL",
          "ELCV2",
          "EIC",
          "LEL",
          "LCC",
          "LED",
          "EWC",
          "LTS",
        ],
        reportAsAddressKeys: ["LO", "GE", "MA_ADDR", "MA_MAPS", "MA_ADDE"],
        reportAsPlaceKeys: [
          "AT",
          "PL",
          "CT",
          "MA_MNTY",
          "MA_PNTY",
          "MA_BDIE",
          "MA_PLAC",
          "ELG",
          "GDA",
          "EWG",
          "EIG",
        ],
        reportAsLocalKeys: [
          "RS",
          "HS",
          "RTS",
          "LS",
          "LLS",
          "LRS",
          "ELP",
          "EIP",
          "EMS",
          "LHS",
          "EAIA",
        ],
        directionsSearchCount: 1.0,
        useNewListingSearchCount: true,
        listingSearchCount: 18,
        instrumentOldSearchEvents: true,
        streetsideEnabledEntityTypes: [1, 2, 10, 200],
        pushpinIconScenarios: ["23", "25", "31"],
        boundaryDisabledLocationTypes: [
          "ElectoralDistrict",
          "StreetAddress",
          "Neighborhood",
          "Other",
        ],
        contextMenuNearbyCategories: [
          "Restaurants:90287",
          "Hotels:91572",
          "Bars:90243",
          "Attractions:90012",
          "Coffee Shops:91649",
        ],
        enableHotelTextAds: true,
        enableRestaurantTextAds: true,
        enableHotelListBtTextAds: true,
        enableRestListBtTextAds: true,
        requestUrlFormatForLocalOverlayOnSerp:
          "/maps/localoverlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&mapcardtitle={title}&appid={appid}&p1=[AplusAnswer]&originig={originIG}",
        requestUrlFormatForEventDetailCard:
          "/maps/overlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&mapcardtitle={title}&appid={appid}&p1=[AplusAnswer]",
        localOverlayOnSerpCategoryIDs: ["90287", "90232", "91572", "13344"],
        disableOSearchScenarioKeys: ["LERC"],
        categoriesWithServerPagination: [
          "house",
          "trail",
          "event",
          "91572",
          "13344",
          "attraction",
          "protectedsite",
        ],
        serverPaginationForLocalEntities: true,
        poiCountOverrideByCategoryId: { 91572: "100", 13344: "100" },
        categoriesWithPricePoi: ["House", "90089"],
        requestUrlFormatForTravelOverlayOnSerp:
          "/maps/overlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&mapcardtitle={title}&appid={appid}&p1=[AplusAnswer]",
        fallbackRequestUrlFormatForTravelOverlayOnSerp: "",
        requestUrlFormatForRealEstateOverlayOnSerp:
          "/maps/overlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&mapcardtitle={title}&appid={appid}&p1=[AplusAnswer]",
        iconOnlyLimitBySegmentTypeOrCategoryId: {
          91572: "20",
          13344: "20",
          house: "0.5",
        },
        useShowMeForSegmentMicroPoi: [
          "house",
          "91572",
          "13344",
          "attraction",
          "trail",
          "campground",
        ],
        useBfprRequestUrlFormat:
          "/maps/overlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&mapcardtitle={title}&appid={appid}&p1=[AplusAnswer]",
        infoboxUrlFormat:
          "/maps/infoboxoverlaybfpr?q={query}&filters={filter}direction_partner%3A%22maps%22%20tid%3A%22{tid}%22&appid={appid}",
        richInfoboxEnabledAnswerKeys: [
          "1",
          "2",
          "12",
          "25",
          "28",
          "32",
          "33",
          "39",
          "41",
          "42",
          "43",
          "45",
          "46",
          "47",
          "49",
          "50",
        ],
        bypassMicropoiWorkaround: true,
        requestUrlFormatForItineraryModule: "",
        requestUrlFormatForProductAdsModule:
          "/maps/relatedproducts?q={query}&providerid={provid}&storeid={storeid}&prodig={ig}&ypid={ypid}&retailsource={rsource}&bizlocid={bizloc}&trigtype={trigtype}",
        showPricePoiHotelsOnOneMap: true,
        showInlineFilters: true,
        setMapViewForChainsForSuperApp: true,
        enableCustomHotelsExperience: true,
        enableCustomRestaurantsExperience: true,
        houseCardWidth: 472,
        hotelCardWidth: 464,
        restaurantCardWidth: 464,
        doubleWideListEnabled: true,
        eventPreArrivalTime: 30,
        enableInfoBox: true,
        landmarkPoiRadius: 14,
        sendDoNotBlockResultsForSID: true,
        listingQuicksaveCategoryWhitelist: [
          "Attraction",
          "Trail",
          "Campground",
          "90016",
          "90287",
          "91572",
        ],
        hoverThreshold: 2000,
        sendFakeGlinkPing: true,
        applyCatIdsForAllPins: true,
        maxHomeOrWorkDistanceMeters: 80000,
        minHomeOrWorkDistanceMeters: 50,
        maxWalkingDistance: 800,
        minTimeThreshold: 3,
        homeWorkAnswerScenarios: [
          1, 2, 3, 4, 6, 7, 8, 10, 12, 23, 24, 25, 27, 28, 29, 31, 32, 33, 40,
          42, 46,
        ],
        enableListingRefreshCats: ["attraction"],
        threeColumnListSegmentsEnabled: ["Attraction", "Trail", "Restaurant"],
        twoColumnListSegmentsEnabled: [],
        defaultListPlusDetailsCardWidth: 484,
        threeColumnListPlusDetailsCardWidth: 732,
        baseCardWidth: 360,
        placeCardWidth: 650,
        threeColumnMinBrowserWidth: 1887,
        sendFakeGlinkPingForStaticMapSegments: ["House", "RentalProperty"],
        locationFilterAjaxEndpoint:
          "/local/hotelcontent?content=HotelPoi&cityid=",
        enableNewActionBarButtons: true,
        modifyIntlDateFormat: true,
        plcHoldImageHeight: 200,
        addNewSSPlcHoldImage: true,
        narrowMultiColTCF: true,
        enableCategoryIdMapping: true,
        enablePoiCentering: true,
        useNewErrorCard: true,
        baseDetailsWidth: 464,
        oneSizeDetail: true,
        waterfallEnabledCategories: ["attraction"],
        enableAutoScrollToSelectedListItem: true,
        infiniteScrollEnabledCategories: ["house", "attraction"],
        enabledCategoriesForResize: [
          "attraction",
          "90012",
          "restaurant",
          "90287",
        ],
        optimizeResultsListLoadingForWaterfall: true,
        enableSaveButtonOnWaterfall: true,
        enableImagePostLoading: true,
        enableImprovedPerf: true,
        matchingCategoriesForInfiniteScroll: [],
        landmarkFormCode: "",
        wideListCardMinClientWidth: 1232,
      },
      sharing: {
        featureType: "Sharing",
        isEnabled: true,
        supportedSchemas: {
          1: {
            version: 1,
            supportedFeatures: [
              "TaskFramework",
              "CompositeMapMode",
              "Traffic",
              "LocalListing",
              "LocalDetails",
              "Collections",
              "Directions",
              "Streetside",
              "TransitStop",
              "NearbyTransit",
              "TransitLine",
            ],
          },
          2: {
            version: 2,
            supportedFeatures: [
              "CompositeMapMode",
              "Streetside",
              "TaskFramework",
              "LocalListing",
              "LocalDetails",
              "Traffic",
              "Collections",
              "Directions",
              "TransitStop",
              "NearbyTransit",
              "TransitLine",
              "ShareImage",
              "ItineraryDetails",
              "MyContributions",
            ],
          },
        },
        currentProtocolVersion: 2,
        currentSchemaVersion: 2,
        readSchemaVersion: 1,
        defaultSchemaVersion: 1,
        serviceEndpoint: "maps/permalink",
        shellPath: "maps",
        canonicalPath: "https://www.bing.com/maps",
        formCode: "S00027",
        shorteningServiceUrl: "",
        numAutoSharedCards: 10,
        enableMultipleCardSharing: true,
        setFlightFeatures: [],
        landingPageChangeParameter: "lpchange",
        enabledTasksToRedirect: [
          "LocalDetails",
          "PolygonEntityDetails",
          "Directions",
          "LocalListing",
          "Collections",
          "ItineraryDetails",
          "ItineraryListings",
        ],
        embedPageUrl:
          "/maps/embed-a-map?src=SHELL&cp={0}~{1}&lvl={2}&form=LMLTEW",
        facebookShareUrl:
          "https://www.facebook.com/dialog/share?app_id=2249142638525661&href={url}&redirect_uri={facebookpage}&display=popup",
        twitterShareUrl:
          "https://twitter.com/intent/tweet?text={text}&url={url}&related={related}",
        facebookRedirectUrl: "https://www.facebook.com",
        mapSnippetUrl: "/maps/geoplat/REST/v1/Imagery/Map/Road",
        shareImgWidth: 600,
        shareImgHeight: 315,
        shareImgMargin: 2,
        shareImgMarginFill: "white",
        shareImgDetailPushpinType: "176",
        shareImgListPushpinType: "163",
        noIndexParams: ["mkt", "setmkt", "setlang", "q"],
        sharingOSEnvironment:
          "https://ObjectStoreBing.Prod.Asia.binginternal.com:88/sds",
        sharingOSNamespace: "Maps",
        sharingOSTimeout: 3000,
        sharingOSTable: "SharingProd",
        clientCert: "APPKIClientCert",
        isEnableSocialSharing: true,
        disableSharingLargeBoundingBox: {
          north: 76.61365,
          east: 179.28311,
          south: 44.456196,
          west: 21.959993,
        },
        disableSharingBoundingBoxes: [
          {
            north: 52.42157,
            east: 40.592808,
            south: 44.456196,
            west: 21.959993,
          },
          {
            north: 56.304985,
            east: 32.993397,
            south: 51.248882,
            west: 22.995836,
          },
          {
            north: 71.36265,
            east: 48.375496,
            south: 47.145973,
            west: 28.098288,
          },
          {
            north: 71.93861,
            east: 60.916782,
            south: 50.991005,
            west: 48.375496,
          },
          {
            north: 76.61365,
            east: 179.28311,
            south: 54.059387,
            west: 60.916782,
          },
        ],
        disableLoadingRUBRegion: true,
      },
      optIn: {
        featureType: "OptIn",
        isEnabled: true,
        isMarketSupported: true,
        isLanguageSupported: true,
        showUnsupportedInfo: true,
        isBrowserSupported: true,
        newIsBrowserSupported: true,
        bingDomain: "https://www.bing.com",
        mobileRedirectUrl: "/",
        optOutRedirectUrl: "/maps/",
        blackberryRedirectUrl: "/",
        landingPageUrl: "/maps/sharing",
        serpPageUrl: "/search",
        serpEntityPageUrl: "/entityexplore",
        mapsEntityPageUrl: "/maps/ee",
        myPlacesMobileUrl: "/maps/myplaces/",
        collectionMobileUrl: "/maps/myplaces/collection/",
        nativeMapAppUrl: "https://www.google.com/maps/dir/?api=1",
        isGoogleRedirect: true,
        directionsModeParam: "travelmode",
        directionsModeDriving: "driving",
        directionsModeWalking: "walking",
        directionsModeTransit: "transit",
        mobileSignInUrl:
          "/fd/auth/signin?action=interactive&provider={0}&device=mobile&return_url={1}",
        mobileStreesideUrl: "",
        venueMapMobileUrl: "/",
        mobileBirdseyeV2Url: "",
        mobileItineraryUrl: "",
        mobileHouseUrlPath: "/entityexplore",
        mobileMapsShellUrlPath: "/maps",
        inPrivateErrorPage: "/profile/history?FORM=O2HV46",
      },
      feedback: {
        featureType: "Feedback",
        isEnabled: true,
        emailEnabled: true,
        surfApiEndpoint: "/customerfeedback/queue/full/surf",
        surfApiEndpointV2: "/customerfeedback/queue/full/submission",
        baseMapFeedbackVersion: "mapsV8-Preview",
        feedbackPinTipExpiry: 15000,
        privacyPolicyLink: "http://go.microsoft.com/fwlink/?LinkId=521839",
        autoGeocodeMissingBusinessAddressMarkets: "GB,US",
        readLinkUrlPrefix: "https://www.bingapis.com/api/v7/localbusinesses/",
        snrSearchUrlPrefix: "https://www.bingapis.com/api/v7/places/search",
        snrSearchAppId: "10494624087FFA87319BBD402D1ABC1760B4E505",
        enableAutoSuggestOnMe: true,
        snrSearchCount: "50",
        imageUrlPrefix: "https://www.bing.com",
        showBetaButton: true,
        teolinOptOutLink: "",
        bingPlacesLink:
          "https://www.bingplaces.com/DashBoard/SearchBusiness?src=maps",
        shouldIgnoreSAE: true,
        enableStreetsideFdbk: true,
      },
      print: {
        featureType: "Print",
        isEnabled: true,
        printImgOverviewMapUrlFormat:
          "https://www.bing.com/maps/geoplat/REST/v1/Imagery/Map/RoadVibrant/{lat},{lon}/{zoom}/?mapsize=410,410&key={credentials}&od=2&{cmnPltParam}",
        printImgMiniMapUrlFormat:
          "https://www.bing.com/maps/geoplat/REST/v1/Imagery/Map/RoadVibrant/{lat},{lon}/14/Routes?mapsize=410,410&{wp}key={credentials}&rid={rid}&od=2&{cmnPltParam}",
        notesMaxChars: 1500,
        minZoomLevel: 2,
      },
      localGuide: {
        featureType: "LocalGuide",
        localNearbyBaseUrl:
          "https://{0}/maps/localnearby?cardWidth={1}&location={2}",
        welcomePanelWidth: 464,
        wideWidthL2Threshold: 1800,
        welcomePanelWideWidth: 732,
        articleL2Width: 516,
        wideWidthThreshold: 1800,
        isSlideCardEnabled: true,
        requeryDistanceThreshold: 32000,
        isNatDayL2Enabled: true,
        enableLocationAugmentationForContentFirst: true,
        enablePageLayoutSettings: true,
        enableSaveOnArticleEntities: true,
        enableGroupedEvents: true,
        showLessLocalGuide: true,
      },
      transientLens: { featureType: "TransientLens", isEnabled: true },
      transit: {
        featureType: "Transit",
        isEnabled: true,
        transitStopRequestFormat:
          "https://dev.virtualearth.net/REST/v1/Transit/Schedules/Stop?{version}&stopId={stopId}&dt={month}/{day}/{year}%20{hour}:{min}:{sec}&key={credentials}&o=json&jsonp={callback}&{cmnPltParam}",
        transitLineRequestFormat:
          "https://dev.virtualearth.net/REST/v1/Transit/lines/{stoplat},{stoplong}?ln={linename}&dist={dist}&&dt={month}/{day}/{year}%20{hour}:{min}:{sec}&key={credentials}&o=json&jsonp={callback}&{cmnPltParam}",
        nearbyTransitStopRequestFormat:
          "https://dev.virtualearth.net/REST/v1/Transit/Stops/{location}?span={span}&dt={month}/{day}/{year}%20{hour}:{min}:{sec}&key={credentials}&o=json&jsonp={callback}&{cmnPltParam}",
        nearbyStopSpan: 0.5,
        unit: 2,
        nearbyStopMaxShown: 10,
        transitOBDLEnabled: true,
      },
      taskBar: {
        featureType: "TaskBar",
        isEnabled: true,
        showTaskBarLabels: true,
        windowMinWidth: 768,
        windowMinHeight: 390,
        taskBarMapTypeTextMinWidth: 768,
        fullScreen: true,
        searchBoxWidth: 650,
        navButtonWidth: 220,
        maxIdControlsWidth: 147,
        minIdControlWidth: 103,
        minimumActionButtonsWidth: 185,
        maximumActionButtonsWidth: 288,
        taskBarResizeBuffer: 60,
        taskbarTextBuffer: 90,
        searchButtonWidth: 38,
        minSearchBoxWidth: 360,
        taskbarLeftBuffer: 152,
        updateSearchTermOfAutosuggestWithTaskTitle: true,
        taskbarButtonsShowTextWidth: 1020,
        taskbarIdShowWidth: 820,
        taskbarRightBuffer: 60,
        categoryLayers: ["commutability", "school"],
        forceCalendarForVR: true,
        enableSortDropDown: true,
        enableSortDropDownForAllSegments: true,
        sortMaxOptionsNormal: 3,
        sortMaxOptionsWide: 4,
        whiteBackgroundEnable: true,
        searchFormCode: "",
      },
      travel: {
        featureType: "Travel",
        isEnabled: true,
        walkingDistanceThreshold: 805,
        walkingTimeThreshold: 900,
        recommendationModules: [
          "WhatToDo",
          "WhatToDoOpalAction",
          "EatAndDrink",
          "EatAndDrinkOpalAction",
          "EatAndDrinkOpalScenario",
          "WhereToStay",
          "WhereToStayOpalAction",
          "Events",
        ],
        enableInfoBox: true,
        itineraryDefaultCardWidth: 464,
        itineraryWideCardWidth: 732,
        minWideCardWidth: 1550,
        itineraryUrl: "/local/itinerary?q={0}&itinid={1}&sq={2}",
      },
      slideOutMenu: { featureType: "SlideOutMenu" },
      navBar: {
        featureType: "NavBar",
        isEnabled: true,
        mapTypeButtonContainerWrapperCollapsed: 60,
      },
      notification: {
        featureType: "Notification",
        isEnabled: true,
        insertionPointId: 5006,
        partnerId: "Maps",
      },
      isochroneLayer: {
        featureType: "IsochroneLayer",
        isEnabled: true,
        url: "https://dev.virtualearth.net/REST/v1/Routes/Isochrones?",
      },
      layerManager: {
        featureType: "LayerManager",
        isEnabled: true,
        categoryToEndpointMapping: {
          school: "json",
          transit: "transit",
          commutability: "commutability",
          house: "json",
          hotel: "json",
          attraction: "json",
          trail: "json",
          campground: "json",
        },
        categoryToRequestTypeMapping: {
          school: "tilecoordinates",
          house: "tilecoordinates",
          hotel: "tilecoordinates",
          attraction: "tilecoordinates",
          trail: "tilecoordinates",
          campground: "tilecoordinates",
        },
        jsonEndpoint:
          "/maps/localpoioverlaybfpr?q={queryText}&count={count}&localMapView={mapview}&filters={filters}&entityType={entityType}&poicount={poicount}",
        filterParam: "POIOverlaySegment:{category}",
        categoryToQueryTextMapping: {
          school: "schools",
          coffee: "coffee",
          grocery: "groceries",
          gasstation: "gas stations",
        },
        schoolsCount: 50,
        realEstatePoiCount: 100,
        hotelPoiCount: 50,
        attractionPoiCount: 50,
        layerTileLevel: 1,
        hotelLayerTileLevel: 1,
        schoolZoomLevelThreshold: 9,
        houseZoomLevelThreshold: 6,
        defaultZoomLevelThreshold: 9,
        enabledCategories: [
          "school",
          "transit",
          "commutability",
          "house",
          "hotel",
          "attraction",
          "trail",
          "campground",
        ],
        displayAsMicropoiCategories: ["Attraction", "Trail", "Campground"],
        hoverThreshold: 2000,
        imageUrlFormat:
          "/th?id={imageId}&w=80&h=80&c=7&rs=1&qlt=80&cdv=1&pid=18.2",
        useRootQueryInitially: { house: true, hotel: true },
      },
      performance: { featureType: "Performance", isEnabled: true },
      commutability: {
        featureType: "Commutability",
        isEnabled: true,
        peakTime: "9:00:00",
        offPeakTime: "11:00:00",
        showIntersection: true,
        prefetch: true,
        intersectFillColor: "rgba(247, 99, 12, 0.1)",
        isochroneOneFillColor: "rgba(247, 99, 12, 0.1)",
        isochroneTwoFillColor: "rgba(247, 99, 12, 0.1)",
        autoSuggestMaxResult: 5,
        isochroneStrokeColor: "rgb(247, 99, 12)",
        isochroneStrokeThickness: 2,
        isochroneSecondaryStrokeColor: "rgba(255,255,255,1)",
        isochroneSecondaryStrokeThickness: 4,
      },
      searchManager: {
        featureType: "SearchManager",
        isEnabled: true,
        entityLookupUrl:
          "https://dev.virtualearth.net/REST/v1/locationrecog/{latitude},{longitude}?&key={credentials}&{cmnPltParam}",
      },
      xsr: {
        featureType: "Xsr",
        isEnabled: true,
        styleEntryToBucketUrl: "{urlbase}?mssetbv={stlVersion}&og={odmgenid}",
        mapImageTemplateUrlFormat:
          "{urlbase}?v={stlVersion}&og={odmgenid}&idx={imageIdx}&oidjs={orgId}&features=ci",
        fetchNewMapImageFormat: true,
        convertLegacyMapImageFormat: true,
        searchInvertsColors: true,
        usePath2D: true,
      },
      flyover: {
        featureType: "Flyover",
        azureMediaPlayerJSUrl:
          "https://amp.azure.net/libs/amp/2.3.8/azuremediaplayer.min.js",
        azureMediaPlayerStyleUrl:
          "https://amp.azure.net/libs/amp/2.3.8/skins/amp-default/azuremediaplayer.min.css",
        videoUrlFormat:
          "https://bingmapsflyovermedia-uswe.streaming.media.azure.net/{fileLocation}/manifest",
        flashSsUrl:
          "https://amp.azure.net/libs/amp/latest/techs/StrobeMediaPlayback.2.0.swf",
        silverlightSsUrl:
          "https://amp.azure.net/libs/amp/latest/techs/SmoothStreamingPlayer.xap",
      },
      flywheel: {
        featureType: "Flywheel",
        minZoomLevel: 12,
        boundsList: [
          "Australia:10:111:-44:155",
          "SouthAmerica:14:-96:-57:-34",
          "Africa:38:-26:-37:53",
          "MiddleEast:56:32:12:88",
          "Caribbean:24:-86:10:-58",
          "Bahamas:27:-79.5:20:-72",
        ],
        flywheelURL:
          "https://www.bing.com/mapbuilder/#background=Bing&disable_features=boundaries&map={zoomLevel}/{latitude}/{longitude}",
      },
      flywheelBanner: { featureType: "FlywheelBanner" },
      landmarks3D: {
        featureType: "Landmarks3D",
        viewerUrlFormat:
          "https://landmark3d.azureedge.net/?mode=control&sessionid={sessionid}&lat={latitude}&lng={longitude}&alt={elevation}&rad={radius}&pit={pitch}&name={name}&setLang={lang}&rtl={rtl}",
        backendUrlFormat: "/maps/landmark3d?ypid={ypid}",
        useBackend: true,
        shareLinkFormat:
          "{origin}/maps/?cp={latitude}~{longitude}&lmk3d={props}",
        enableShare: true,
        viewerVersionUrl:
          "https://landmark3dweb.azureedge.net/release/version.txt",
        viewerUrlFormatWithVersion:
          "https://landmark3dweb.azureedge.net/release/{version}/index.html?mode=control&sessionid={sessionid}&lat={latitude}&lng={longitude}&alt={elevation}&rad={radius}&pit={pitch}&name={name}&setLang={lang}&rtl={rtl}",
      },
    },
    dynamicProperties: {
      origin: "https://www.bing.com",
      market: "en-IN",
      credentials:
        "AqGrMcJvoHh0AwTxWEVhPsT4sdT5xxgOVRe_T-CUas8poD6tGAQuuMLGDBDHDMDj",
      impressionGuid: "413003565BD84E2B931567FE77526E10",
      mapsIG: "413003565BD84E2B931567FE77526E10",
      clientId: "0C56520ABF686A481D13411BBE6E6B51",
      location: "",
      reverseIPLocation: "28.629899978637695,77.0531005859375",
      reverseIPPlaceType: "PostalCode",
      marketLocation: "47.603569,-122.329453",
      clientIP: "14.139.226.226",
      uiLanguage: "en-GB",
      userRegion: "in",
      isGeopolUserRegion: true,
      cultureData: {
        numberDecimalSeparator: ".",
        shortTimePattern: "HH:mm",
        timeSeparator: ":",
        amDesignator: "am",
        pmDesignator: "pm",
        shortDatePattern: "dd/MM/yyyy",
        longDatePattern: "dddd, d MMMM yyyy",
        yearMonthPattern: "MMMM yyyy",
        weekMonthDayPattern: "d MMMM",
        dateSeparator: "/",
        firstDayOfWeek: "1",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "",
        ],
        monthGenitiveNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "",
        ],
        abbreviatedMonthNames: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "",
        ],
        abbreviatedMonthGenitiveNames: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        shortestDayNames: ["S", "M", "T", "W", "T", "F", "S"],
      },
      appId: "E18E19EF-764F-41A9-B53E-6E98AE519695",
      bingRequestDomain: "www.bing.com",
      compositionHandlerGenerationId: "2282",
      osmGenerationId: "2221",
      synthViewGenerationId: "13816",
      streetsideImageryGenerationId: "13811",
      streetsideMetadataGenerationId: "13651",
      birdseyeV2MetadataGenerationId: "11124",
      birdseyeV2ImageryGenerationId: "11124",
    },
    isSDK: true,
    enableErrorInstrumentation: true,
    encodeURLParameters: [],
    perfSDKInclusions: { maps_clt: true },
    isJSEventScaleAware: true,
    glIcon: true,
    stlVersion: "8.22",
    ctpVersion: 2,
    tileSourceParam: "",
    platformCommonParam: "ur=in&c=en-GB",
    featuresEnabledByAuthKey: true,
    addCrossOriginAttr: true,
    networkJsonpFix: true,
  };
  mapsNamespace.CallbackOnLoad = "initMap";
  var ReferrerPolicy;
  (function () {
    var t,
      n = window.location,
      i = n ? n.href : null,
      e = n ? n.origin : null;
    if (i && e) {
      var r = Microsoft.Maps.GlobalConfig.dynamicProperties,
        u = r.scriptReferrer,
        f = u && decodeURIComponent(u);
      t = f
        ? f === i.toLowerCase()
          ? "no-referrer-when-downgrade"
          : "strict-origin-when-cross-origin"
        : "no-referrer";
      r.referrerPolicy = t;
    }
  })(ReferrerPolicy || (ReferrerPolicy = {}));
  var dragonflyCatalog = {
    sources: {
      MapCore: {
        endpoint: "https://r.bing.com/rp/zU3NDUbXBLJTr7XJFgZvmmVZTPM.br.js",
      },
      CompositeMode: {
        endpoint: "https://r.bing.com/rp/SaASvOPPupnGJ9StbwEecDBjeBM.br.js",
        dependencies: ["TilePyramid"],
      },
      BirdseyeV2: {
        endpoint: "https://r.bing.com/rp/I6cD6eRzHMVnYnII-u_cx1UhB68.br.js",
        dependencies: ["CompositeMode"],
      },
      VectorDrawing: {
        endpoint: "https://r.bing.com/rp/PgZslZuu2vcwiZciV_22IQq3Ajk.br.js",
      },
      Templating: {
        endpoint: "https://r.bing.com/rp/4o3JRNcVNiip04Bi-k5SHPBJXWw.br.js",
        dependencies: ["TemplatingCssBundle", "VectorDrawing"],
      },
      TemplatingCssBundle: {
        endpoint:
          "https://r.bing.com/rb/3D/cir3,cc,nc/3RXCpxd5XyXRC39HfoyGgubftRI.css?bu=AZQH&or=w",
        highContrastEndpoint:
          "https://r.bing.com/rb/3D/cir3,cc,nc/0fyQKOSM_bAGRJa3eT1EvMeP_Gc.css?bu=ApQHoAc&or=w",
        sourceType: "Stylesheet",
      },
      MapDelay: {
        endpoint: "https://r.bing.com/rp/HqRu86khBmlFnjAZwdfABwqvNuE.br.js",
        dependencies: ["NavigationCss", "Templating", "CompositeMode", "SDK"],
      },
      NavigationCss: {
        endpoint: "https://r.bing.com/rp/Aul74W_D1uhwU6rtGOQjoPs6VoA.br.css",
        highContrastEndpoint:
          "https://r.bing.com/rp/JczgsnGvglDI4VXqS6r-bHbwV_c.br.css",
        sourceType: "Stylesheet",
      },
      MapOverlays: {
        endpoint: "https://r.bing.com/rp/gvD9tfKzncVRQjAkcFMGaYeleB4.br.js",
        dependencies: ["MapDelay", "MapOverlaysCss"],
      },
      MapOverlaysCss: {
        endpoint: "https://r.bing.com/rp/LH9biYWGDoJsJe5ime2QAGgdPhk.br.css",
        sourceType: "Stylesheet",
      },
      BaseMapData: {
        endpoint: "https://r.bing.com/rp/oRnnfKYAsGL0_JShLkNCWVFIXzE.br.js",
        dependencies: ["CompositeMode", "TilePyramid", "Templating"],
      },
      Labels: {
        endpoint: "https://r.bing.com/rp/aopcCyTUdY-IrIC-X9z2zKDdao0.br.js",
        dependencies: ["CompositeMode", "VectorDrawing", "BaseMapData"],
      },
      GLRendering: {
        endpoint: "https://r.bing.com/rp/Ht30j2UOMjbSsbp4EFUok0FlHRc.br.js",
        dependencies: ["Labels"],
      },
      GLVector: {
        endpoint: "https://r.bing.com/rp/gQcC0PQ3kyH04EBxaxjoe_F3Mwg.br.js",
      },
      CommonControls: {
        endpoint: "https://r.bing.com/rp/Y5A6vvBqsNjX364cM7J1Q1sPhYU.br.js",
        dependencies: [
          "CommonControlsCss",
          "MapsInfoboxCss",
          "TaskFramework",
          "MapDelay",
          "DataHandler",
          "BaseMapData",
          "CompositeMode",
          "SDK",
        ],
      },
      CommonControlsCss: {
        endpoint: "https://r.bing.com/rp/bF6vMm3BBcf-d54BIS_CVARkpzk.br.css",
        highContrastEndpoint:
          "https://r.bing.com/rp/XRc0nUq_7XSB5iWfoIT37WSC-YM.br.css",
        sourceType: "Stylesheet",
      },
      MapsInfoboxCss: {
        endpoint: "https://r.bing.com/rp/EGPHZmY5pStIGs7eZCcu_xTmctY.br.css",
        sourceType: "Stylesheet",
      },
      TilePyramid: {
        endpoint: "https://r.bing.com/rp/rH1EkhFwf4TCWD9A-tVD7jIj1tU.br.js",
      },
      TaskFramework: {
        endpoint: "https://r.bing.com/rp/k-o8m9HGqy4iv0cMBJfcFiF47cI.br.js",
        dependencies: ["TaskFrameworkCss", "MapDelay", "Templating"],
      },
      TaskFrameworkCss: {
        endpoint: "https://r.bing.com/rp/j1FxqQ4OnlETr89d8Dkcc5V8DjM.br.css",
        highContrastEndpoint:
          "https://r.bing.com/rp/Flvmo6bzUTYpOe-9wOh-3I-h9tU.br.css",
        sourceType: "Stylesheet",
      },
      DataHandler: {
        endpoint: "https://r.bing.com/rp/V4rpBXY8-WbLGGOgUIXkfD3OptU.br.js",
        dependencies: ["MapDelay", "TaskFramework"],
      },
      QRCode: {
        endpoint: "https://r.bing.com/rp/C_Ozn5_Q_nRlQ1ONH8Fs1_0DdFA.br.js",
      },
      Directions: {
        endpoint: "https://r.bing.com/rp/ES0Ff3GW2la_q0bOsr59Vuy8PCw.br.js",
        dependencies: [
          "DirectionsCss",
          "Templating",
          "TaskFramework",
          "CommonControls",
          "InternalControls",
          "Transit",
          "Traffic",
        ],
      },
      DirectionsCss: {
        endpoint: "https://r.bing.com/rp/1h-ndndokgqWWV722NJ_d6BRhiY.br.css",
        highContrastEndpoint:
          "https://r.bing.com/rp/5HvrEsmUvdQHc2qIBQAKxQ2BMeY.br.css",
        sourceType: "Stylesheet",
      },
      Streetside: {
        endpoint: "https://r.bing.com/rp/TR0NpfaM20oBytIwGirUUxjKJbs.br.js",
        dependencies: [
          "StreetsideCss",
          "TaskFramework",
          "DataHandler",
          "InternalControls",
        ],
      },
      StreetsideCss: {
        endpoint: "https://r.bing.com/rp/wwGWsVGLM4jCBaCeeeMuQj5JzXU.br.css",
        highContrastEndpoint:
          "https://r.bing.com/rp/qSNshZoBxvJIEoHvZX4xbjJ2igg.br.css",
        sourceType: "Stylesheet",
      },
      Collections: {
        endpoint: "https://r.bing.com/rp/tn90_hbe3t-i51RB0UZuERpWxQo.br.js",
        dependencies: [
          "CollectionsCss",
          "MapCore",
          "Templating",
          "DataHandler",
          "TaskFramework",
          "CommonControls",
          "CloudGraphDataManager",
          "MyContributionsCss",
        ],
      },
      CollectionsCss: {
        endpoint: "https://r.bing.com/rp/ca_zf8VHJaSnFMLafbZViwof_1M.br.css",
        sourceType: "Stylesheet",
      },
      MyContributionsCss: {
        endpoint: "https://r.bing.com/rp/-IhV8uyGd11v9lDq1q4Kw8PSQNc.br.css",
        sourceType: "Stylesheet",
      },
      LayerManager: {
        endpoint: "https://r.bing.com/rp/wcTEwusZdoHZwIXfRkuDiRjiFt4.br.js",
        dependencies: [
          "Templating",
          "TaskFramework",
          "CommonControls",
          "TilePyramid",
          "LocalSearch",
          "SDK",
        ],
      },
      CloudGraphDataManager: {
        endpoint: "https://r.bing.com/rp/MKUpZCB-ikoWp6Dg3f78OX9_m5U.br.js",
        dependencies: [
          "Templating",
          "DataHandler",
          "TaskFramework",
          "CommonControls",
          "InternalControls",
        ],
      },
      LocalSearch: {
        endpoint: "https://r.bing.com/rp/x6CKNzHHeqcakDyOtnRIdcDUIi0.br.js",
        dependencies: [
          "LocalSearchPrintCss",
          "Templating",
          "TaskFramework",
          "MapDelay",
          "CommonControls",
          "InternalControls",
          "SDK",
          "Directions",
        ],
      },
      LocalSearchPrintCss: {
        endpoint: "https://r.bing.com/rp/CcCUtpDv1hf78tE5afsqvGRubyo.br.css",
        sourceType: "Stylesheet",
      },
      Calendar: {
        endpoint: "https://r.bing.com/rp/3yfjFocuzfbBuLaE9SH-Hczg6Qs.br.js",
        dependencies: ["CalendarCss", "MapCore"],
      },
      CalendarCss: {
        endpoint: "https://r.bing.com/rp/LQE07Tud4TLHIP5pe1MrTCMv-f4.br.css",
        sourceType: "Stylesheet",
      },
      Transit: {
        endpoint: "https://r.bing.com/rp/GE00gpiTL_f0ZhuGbczwtR8HTk8.br.js",
        dependencies: [
          "TransitCss",
          "Templating",
          "TaskFramework",
          "CommonControls",
        ],
      },
      TransitCss: {
        endpoint: "https://r.bing.com/rp/Sv8yIcp7juTVJdMJg0AOmcc3f-Y.br.css",
        sourceType: "Stylesheet",
      },
      LocalGuide: {
        endpoint: "https://r.bing.com/rp/qGvdi3vkYvZYwgI_1sRMYDEZHxQ.br.js",
        dependencies: [
          "LocalGuideCss",
          "Templating",
          "TaskFramework",
          "CommonControls",
        ],
      },
      LocalGuideCss: {
        endpoint: "https://r.bing.com/rp/CgxN6uxHiK8QJ9MQ05Mb0nzvsbs.br.css",
        sourceType: "Stylesheet",
      },
      Traffic: {
        endpoint: "https://r.bing.com/rp/yyHPRaJVfcaRlPwejQpBO-h6XWo.br.js",
        dependencies: [
          "TrafficCss",
          "Templating",
          "TaskFramework",
          "CommonControls",
          "TilePyramid",
        ],
      },
      TrafficCss: {
        endpoint: "https://r.bing.com/rp/cVxl8vZue5gJVlBa0uqKJuxjkKg.br.css",
        sourceType: "Stylesheet",
      },
      Travel: {
        endpoint: "https://r.bing.com/rp/iPfTols2RzrWM5_xgYPmJOvq01o.br.js",
        dependencies: [
          "TravelCss",
          "Templating",
          "Travel2Css",
          "TaskFramework",
          "CommonControls",
          "TilePyramid",
          "Directions",
          "CloudGraphDataManager",
        ],
      },
      TravelCss: {
        endpoint: "https://r.bing.com/rp/LQE07Tud4TLHIP5pe1MrTCMv-f4.br.css",
        sourceType: "Stylesheet",
      },
      Travel2Css: {
        endpoint: "https://r.bing.com/rp/1-PFUlsvr8l4MCqz9nBut82nTcE.br.css",
        sourceType: "Stylesheet",
      },
      InternalControls: {
        endpoint: "https://r.bing.com/rp/gA0uV5kEtgUKjZpj1x_kKXqx-Ms.br.js",
        dependencies: [
          "InternalControlsCss",
          "TaskBarCss",
          "TaskFramework",
          "MapDelay",
          "DataHandler",
          "CommonControls",
        ],
      },
      InternalControlsCss: {
        endpoint: "https://r.bing.com/rp/xhmzxkepuyC0DiSciCKQmzgFXnQ.br.css",
        sourceType: "Stylesheet",
      },
      TaskBarCss: {
        endpoint: "https://r.bing.com/rp/LQE07Tud4TLHIP5pe1MrTCMv-f4.br.css",
        sourceType: "Stylesheet",
      },
      Feedbacks: {
        endpoint: "https://r.bing.com/rp/KYfv_n7At3HAX73VksZijLqHXC0.br.js",
        dependencies: [
          "FeedbacksCss",
          "TaskFramework",
          "MapDelay",
          "DataHandler",
          "CommonControls",
          "InternalControls",
          "OverlayListingMECss",
        ],
      },
      FeedbacksCss: {
        endpoint: "https://r.bing.com/rp/hHdZq0tE4PzvGwDKqNfZjfXNT8c.br.css",
        sourceType: "Stylesheet",
      },
      OverlayListingMECss: {
        endpoint: "https://r.bing.com/rp/Dy98FJMYem973Rb50XgKI-ko_8Q.br.css",
        sourceType: "Stylesheet",
      },
      SDKCss: {
        endpoint: "https://r.bing.com/rp/LXwe98LGHyFLJroafz0uQFclF4s.br.css",
        highContrastEndpoint:
          "https://r.bing.com/rp/02wSCb5lUMLfKjSZLYxerG4ZlJo.br.css",
        sourceType: "Stylesheet",
      },
      SDK: {
        endpoint: "https://r.bing.com/rp/nQgMOPZdJeR1m7Y1cRrRoyX1KEQ.br.js",
        dependencies: [
          "SDKCss",
          "CompositeMode",
          "MapCore",
          "BaseMapData",
          "Labels",
        ],
        sdkDependencies: [
          "SDKCss",
          "CompositeMode",
          "MapCore",
          "BaseMapData",
          "Labels",
          "ConfigurableMap",
        ],
      },
      DT: {
        endpoint: "https://r.bing.com/rp/nebxGMGSFIrlMfTJLaGfBaYdkao.br.js",
        dependencies: [
          "DTCss",
          "CompositeMode",
          "VectorDrawing",
          "BaseMapData",
          "TaskFramework",
          "SDK",
        ],
      },
      DTCss: {
        endpoint: "https://r.bing.com/rp/H4qU83HeKAqWDW-6q6WCGyr9sbE.br.css",
        sourceType: "Stylesheet",
      },
      WKT: {
        endpoint: "https://r.bing.com/rp/6Lt3qhCeUAo6GZfmPu6OA0VQWkI.br.js",
        dependencies: ["SDK"],
      },
      HeatMap: {
        endpoint: "https://r.bing.com/rp/FQSmj0N3uZX5HQyHXN_iQsyEPXc.br.js",
        dependencies: ["SDK"],
      },
      Choropleth: {
        endpoint: "https://r.bing.com/rp/VJBOWRtFdV9BPMYFihIXuoTts9s.br.js",
        dependencies: ["SDK"],
      },
      Clustering: {
        endpoint: "https://r.bing.com/rp/iV2itaDfoYguwPP5TeZcV3lOUm4.br.js",
        dependencies: ["SDK"],
      },
      DataBinning: {
        endpoint: "https://r.bing.com/rp/PRbHTXKJH96MwGyAEsiORVsUzaM.br.js",
        dependencies: ["SDK", "SpatialMath"],
      },
      Contour: {
        endpoint: "https://r.bing.com/rp/7ManB7Ln6Kf09RItGsIkbM44Wjk.br.js",
        dependencies: ["SDK", "SpatialMath"],
      },
      VenueMaps: {
        endpoint: "https://r.bing.com/rp/_tqF56g1xrzfOuITLilHFr4WWDM.br.js",
        dependencies: [
          "VenueMapsCss",
          "SDK",
          "SpatialMath",
          "TilePyramid",
          "MapDelay",
        ],
      },
      VenueMapsCss: {
        endpoint: "https://r.bing.com/rp/QXTGwp8i5pUh37FY30hkuEaeZkU.br.css",
        sourceType: "Stylesheet",
      },
      SDS: {
        endpoint: "https://r.bing.com/rp/jOdumtAPxpwx3ujCN4WsLTLn990.br.js",
        dependencies: ["SDK", "WKT"],
      },
      GeoJson: {
        endpoint: "https://r.bing.com/rp/dp0lcH1tQ36NxICXUZS080ZNS88.br.js",
        dependencies: ["SDK"],
      },
      GeoXml: {
        endpoint: "https://r.bing.com/rp/l1lhWbT4MAK7KbZr0_Xeh8StuQI.br.js",
        dependencies: ["SDK", "GeoJson"],
      },
      Isochrone: {
        endpoint: "https://r.bing.com/rp/RDGXfpIdEf1rqnPfqWLq5SsTl-s.br.js",
        dependencies: ["SDK", "SpatialMath"],
      },
      AutosuggestSDK: {
        endpoint: "https://r.bing.com/rp/CeBr4qMmDsMXIl8OoD1FsDjT7Bs.br.js",
        dependencies: ["CommonControls", "SDK", "SDKSearch"],
      },
      SpatialMath: {
        endpoint: "https://r.bing.com/rp/_tlySkxHAbRU4s92cA1mD7h8xzw.br.js",
        dependencies: ["SDK"],
      },
      SDKSearch: {
        endpoint: "https://r.bing.com/rp/Gyzn-Omw0bFKVY3BfZ181U0olyo.br.js",
        dependencies: ["SDK"],
      },
      SDKTraffic: {
        endpoint: "https://r.bing.com/rp/7vIOYSdUigKR-XugkSJMB1vtvNc.br.js",
        dependencies: ["SDK"],
      },
      DirectionsSDK: {
        endpoint: "https://r.bing.com/rp/JOBVYrduO6iphi_cEE6VuEtaMPM.br.js",
        dependencies: ["Directions", "SDK", "SDKSearch"],
      },
      ConfigurableMap: {
        endpoint: "https://r.bing.com/rp/_u0DMIOZxZkxMvyqqiiIR6GRFBU.br.js",
      },
    },
    factories: {
      Map: {
        className: "Microsoft.Maps.CoreMap",
        parameters: [
          "element",
          "-mapOptions",
          "container",
          "CoreConfig",
          "LoggingWrapper",
          "Dispatcher",
          "WorkDispatcher",
        ],
        sourceKey: "MapCore",
      },
      CoreConfig: {
        className: "Microsoft.Maps.Internal._CoreConfig",
        sourceKey: "MapCore",
      },
      ClientPerf: {
        className: "Microsoft.Maps.ClientPerf",
        parameters: ["CoreConfig"],
        sourceKey: "MapCore",
        isSingleton: true,
      },
      LoggingWrapper: {
        className: "Microsoft.Maps.Internal._LoggingWrapper",
        sourceKey: "MapCore",
        isSingleton: true,
      },
      MapFrameManager: {
        className: "Microsoft.Maps.Internal.MapFrameManager",
        parameters: ["Map", "allLayers"],
        sourceKey: "MapCore",
      },
      CustomMapStyleManager: {
        className: "Microsoft.Maps.Internal.CustomMapStyleManager",
        parameters: ["CoreConfig"],
        sourceKey: "MapCore",
        isSingleton: true,
      },
      Dispatcher: {
        className: "Microsoft.Maps.Internal._Dispatcher",
        sourceKey: "MapCore",
        isSingleton: true,
      },
      WorkDispatcher: {
        className: "Microsoft.Maps.Internal._WorkDispatcher",
        sourceKey: "MapCore",
        isSingleton: true,
      },
      CompositeMapMode: {
        className: "Microsoft.Maps.CompositeMapMode",
        parameters: [
          "Map",
          "allLayers",
          "HitTestController",
          "DrawingContextFactory",
          "-crs",
        ],
        sourceKey: "CompositeMode",
        isSingleton: true,
      },
      HitTestController: {
        className: "Microsoft.Maps.Internal.HitTestController",
        parameters: ["Map"],
        sourceKey: "CompositeMode",
        isSingleton: true,
      },
      RasterImageryScene: {
        className: "Microsoft.Maps.RasterImageryScene",
        sourceKey: "CompositeMode",
        factoryType: "reference",
      },
      BirdseyeV2ImageryScene: {
        className: "Microsoft.Maps.BirdseyeV2ImageryScene",
        sourceKey: "CompositeMode",
        factoryType: "reference",
      },
      EnhancedBirdseyeCrs: {
        className: "Microsoft.Maps.EnhancedBirdseyeCrs",
        sourceKey: "CompositeMode",
        factoryType: "reference",
      },
      BirdseyeV2Crs: {
        className: "Microsoft.Maps.BirdseyeV2Crs",
        sourceKey: "CompositeMode",
        factoryType: "reference",
      },
      BirdseyeV2Manager: {
        className: "Microsoft.Maps.BirdseyeV2Manager",
        parameters: ["Map"],
        sourceKey: "CompositeMode",
      },
      DrawingContext: {
        className: "Microsoft.Maps.Internal.CanvasDrawingContext",
        parameters: ["-DrawingContextType", "-canvas", "-devicePixelRatio"],
        sourceKey: "VectorDrawing",
      },
      HitTestingDrawingContext: {
        className: "Microsoft.Maps.Internal.HitTestingCanvasDrawingContext",
        parameters: ["-DrawingContextType"],
        sourceKey: "VectorDrawing",
        isSingleton: true,
      },
      ControlTemplate: {
        className: "Microsoft.Maps.Internal.ControlTemplate",
        parameters: ["templateText", "-staticResources"],
        sourceKey: "Templating",
      },
      DefaultTemplateSelector: {
        className: "Microsoft.Maps.DefaultTemplateSelector",
        parameters: ["Map"],
        sourceKey: "Templating",
      },
      GlobalDataEventHandler: {
        className: "Microsoft.Maps.GlobalDataEventHandler",
        parameters: ["container"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      Permalink: {
        className: "Microsoft.Maps.Internal.Permalink",
        parameters: ["TaskBar", "TaskManager"],
        sourceKey: "MapDelay",
      },
      MapInteraction: {
        className: "Microsoft.Maps.Internal.MapInteraction",
        parameters: ["Map", "CoreConfig", "AerialBirdsEyeTransitionManager"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      BrowserHistoryManager: {
        className: "Microsoft.Maps.Internal.BrowserHistoryManager",
        parameters: ["window", "container", "Map"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      BrowserKeyProvider: {
        className: "Microsoft.Maps.Internal.BrowserKeyProvider",
        parameters: ["MapInteraction", "Map"],
        sourceKey: "MapDelay",
      },
      BrowserPointerProvider: {
        className: "Microsoft.Maps.Internal.BrowserPointerProvider",
        parameters: ["MapInteraction", "Map"],
        sourceKey: "MapDelay",
      },
      MapModeStateHistory: {
        className: "Microsoft.Maps.Internal.MapModeStateHistory",
        parameters: ["Map", "-BrowserHistoryManager"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      NavigationBar: {
        className: "Microsoft.Maps.Internal.NavigationBar",
        parameters: ["Map", "CoreConfig", "AerialBirdsEyeTransitionManager"],
        sourceKey: "MapDelay",
      },
      AerialBirdsEyeTransitionManager: {
        className: "Microsoft.Maps.Internal.AerialBirdsEyeTransitionManager",
        parameters: ["Map"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      NavigationBarOverlay: {
        className: "Microsoft.Maps.NavigationBarOverlay",
        parameters: ["NavigationBar"],
        sourceKey: "MapDelay",
      },
      TrafficToggleButton: {
        className: "Microsoft.Maps.Internal.TrafficToggleButton",
        parameters: ["ControlArgs", "TrafficLayer"],
        sourceKey: "MapDelay",
      },
      GeochainControl: {
        className: "Microsoft.Maps.Internal.GeochainControl",
        parameters: ["Map", "GeochainManager"],
        sourceKey: "MapDelay",
      },
      GeochainOverlay: {
        className: "Microsoft.Maps.Internal.GeochainOverlay",
        parameters: ["GeochainControl"],
        sourceKey: "MapDelay",
      },
      GeochainManager: {
        className: "Microsoft.Maps.Internal.GeochainManager",
        parameters: ["Map", "ReverseGeocoder"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      OverlayManager: {
        className: "Microsoft.Maps.Internal.OverlayManager",
        parameters: ["Map"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      ReverseGeocoder: {
        className: "Microsoft.Maps.Internal.ReverseGeocoder",
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      Geocoder: {
        className: "Microsoft.Maps.Internal.Geocoder",
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      GeolocationProvider: {
        className: "Microsoft.Maps.Internal.GeolocationProvider",
        parameters: ["window", "ReverseGeocoder"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      ListDataSource: {
        className: "Microsoft.Maps.ListDataSource",
        sourceKey: "MapDelay",
      },
      StreetsideModeBootstrapper: {
        className: "Microsoft.Maps.Internal._StreetsideModeBootstrapper",
        parameters: ["Map", "IBubblesSource", "ClientPerf"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      StreetsideMiniBootstrapper: {
        className: "Microsoft.Maps.Internal._StreetsideMiniBootstrapper",
        parameters: ["Map", "IBubblesSource", "ClientPerf"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      StreetsideDirectionsBootstrapper: {
        className: "Microsoft.Maps.Internal._StreetsideDirectionsBootstrapper",
        parameters: ["Map", "IBubblesSource", "ClientPerf"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      StreetsideLocalDetailsBootstrapper: {
        className:
          "Microsoft.Maps.Internal._StreetsideLocalDetailsBootstrapper",
        parameters: ["Map", "IBubblesSource", "ClientPerf"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      StreetsideAutoEntryBehavior: {
        className: "Microsoft.Maps.Internal._StreetsideAutoEntryBehavior",
        parameters: ["Map", "ClientPerf"],
        sourceKey: "MapDelay",
      },
      LandmarksManager: {
        className: "Microsoft.Maps.Internal.LandmarksManager",
        parameters: ["Map", "CoreConfig", "container"],
        sourceKey: "MapDelay",
      },
      CityPolygonManager: {
        className: "Microsoft.Maps.Internal.CityPolygonManager",
        parameters: ["Map", "CoreConfig", "container"],
        sourceKey: "MapDelay",
        isSingleton: true,
      },
      MapOverlayManager: {
        className: "Microsoft.Maps.Internal.MapOverlayManager",
        parameters: ["Map", "RootElement"],
        sourceKey: "MapOverlays",
        isSingleton: true,
      },
      LogoControl: {
        className: "Microsoft.Maps.Internal.LogoControl",
        parameters: ["Map", "Clickable"],
        sourceKey: "MapOverlays",
        isSingleton: true,
      },
      LogoOverlay: {
        className: "Microsoft.Maps.LogoOverlay",
        parameters: ["LogoControl"],
        sourceKey: "MapOverlays",
      },
      CopyrightControl: {
        className: "Microsoft.Maps.Internal.CopyrightControl",
        parameters: ["Map", "CoreConfig", "ShowTermsLink"],
        sourceKey: "MapOverlays",
        isSingleton: true,
      },
      CopyrightOverlay: {
        className: "Microsoft.Maps.CopyrightOverlay",
        parameters: ["CopyrightControl"],
        sourceKey: "MapOverlays",
      },
      ScaleBar: {
        className: "Microsoft.Maps.Internal.ScaleBar",
        parameters: ["Map"],
        sourceKey: "MapOverlays",
      },
      ScaleBarOverlay: {
        className: "Microsoft.Maps.ScaleBarOverlay",
        parameters: ["ScaleBar"],
        sourceKey: "MapOverlays",
      },
      BaseMapDataSource: {
        className: "Microsoft.Maps.Internal._BaseMapDataSource",
        parameters: [
          "Map",
          "CoreConfig",
          "vectorTileUrlFormat",
          "baseMapDataSourceLayersOfInterest",
        ],
        sourceKey: "BaseMapData",
        isSingleton: true,
      },
      BaseMapOSDataSource: {
        className: "Microsoft.Maps.Internal._BaseMapDataSource",
        parameters: [
          "Map",
          "CoreConfig",
          "vectorOSTileUrlFormat",
          "baseMapDataSourceLayersOfInterest",
        ],
        sourceKey: "BaseMapData",
        isSingleton: true,
      },
      BaseMapStreetsideDataSource: {
        className: "Microsoft.Maps.Internal._BaseMapStreetsideDataSource",
        parameters: [
          "Map",
          "CoreConfig",
          "vectorStreetsideTileUrlFormat",
          "baseMapDataSourceLayersOfInterest",
        ],
        sourceKey: "BaseMapData",
        isSingleton: true,
      },
      BaseMapImageLoader: {
        className: "Microsoft.Maps.Internal.BaseMapImageLoader",
        parameters: ["CoreConfig"],
        sourceKey: "BaseMapData",
        isSingleton: true,
      },
      BaseMapTemplateSelector: {
        className: "Microsoft.Maps.Internal._BaseMapTemplateSelectorProxy",
        parameters: [
          "CoreConfig",
          "CustomMapStyleManager",
          "StyleEntryBucketMap",
          "BaseMapImageLoader",
          "mapTemplateUrlFormat",
          "-templateName",
          "-stlVersion",
          "-clientPerf",
        ],
        sourceKey: "BaseMapData",
      },
      LandmarksDataSource: {
        className: "Microsoft.Maps.Internal._LandmarksDataSource",
        parameters: [
          "Map",
          "CoreConfig",
          "vectorTileUrlFormat",
          "landmarksDataSourceLayersOfInterest",
          "-landmarksMinZoom",
          "-landmarksMaxZoom",
          "-landmarksVectorLayerId",
          "-jsonsoSuffix",
        ],
        sourceKey: "BaseMapData",
      },
      LandmarksOSDataSource: {
        className: "Microsoft.Maps.Internal._LandmarksDataSource",
        parameters: [
          "Map",
          "CoreConfig",
          "vectorOSTileUrlFormat",
          "landmarksDataSourceLayersOfInterest",
          "-landmarksMinZoom",
          "-landmarksMaxZoom",
          "-landmarksVectorLayerId",
          "-jsonsoSuffix",
        ],
        sourceKey: "BaseMapData",
      },
      StyleEntryBucketMap: {
        className: "Microsoft.Maps.Internal.StyleEntryBucketMap",
        parameters: ["CoreConfig"],
        sourceKey: "BaseMapData",
        isSingleton: true,
      },
      Landmarks3DDataSource: {
        className: "Microsoft.Maps.Internal._Landmarks3DDataSource",
        parameters: [
          "Map",
          "CoreConfig",
          "vectorTileUrlFormat",
          "landmarksDataSourceLayersOfInterest",
          "-landmarksMinZoom",
          "-landmarksMaxZoom",
          "-landmarks3DVectorLayerId",
          "-jsonsoSuffix",
        ],
        sourceKey: "BaseMapData",
      },
      LabelController: {
        className: "Microsoft.Maps.Internal.LabelController",
        parameters: [
          "CoreConfig",
          "HitTestController",
          "WorkDispatcher",
          "CustomMapStyleManager",
        ],
        sourceKey: "Labels",
      },
      LabelControllerGL: {
        className: "Microsoft.Maps.Internal._LabelControllerGL",
        parameters: [
          "CoreConfig",
          "HitTestController",
          "WorkDispatcher",
          "CustomMapStyleManager",
        ],
        sourceKey: "GLRendering",
      },
      VectorLayerRendererGL: {
        className: "Microsoft.Maps.Internal._VectorLayerRendererGL",
        parameters: ["container", "Map", "rootElement", "sortedVectorLayers"],
        sourceKey: "GLRendering",
      },
      PolygonSplit: {
        className: "Microsoft.Maps.Internal._PolygonSplit",
        sourceKey: "GLVector",
        factoryType: "reference",
      },
      Triangulate: {
        className: "Microsoft.Maps.Internal._Triangulate",
        sourceKey: "GLVector",
        factoryType: "reference",
      },
      TransientLens: {
        className: "Microsoft.Maps.TransientLens",
        parameters: [
          "Map",
          "DefaultTemplateSelector",
          "TransientLensViewModel",
        ],
        sourceKey: "CommonControls",
        isSingleton: true,
      },
      ButtonGroupViewModel: {
        className: "Microsoft.Maps.ButtonGroupViewModel",
        parameters: ["Map"],
        sourceKey: "CommonControls",
      },
      MobileSettingsPage: {
        className: "Microsoft.Maps.MobileSettingsPage",
        parameters: ["Map", "ControlTemplateFactory"],
        sourceKey: "CommonControls",
      },
      TransientLensViewModel: {
        className: "Microsoft.Maps.TransientLensViewModel",
        parameters: [
          "Map",
          "ReverseGeocoder",
          "ControlTemplateFactory",
          "ButtonGroupViewModel",
        ],
        sourceKey: "CommonControls",
      },
      PoiTransientLensViewModel: {
        className: "Microsoft.Maps.PoiTransientLensViewModel",
        parameters: ["Map", "ControlTemplateFactory", "ButtonGroupViewModel"],
        sourceKey: "CommonControls",
      },
      DetailsPoiTransientLensViewModel: {
        className: "Microsoft.Maps.DetailsPoiTransientLensViewModel",
        parameters: ["Map", "ControlTemplateFactory", "ButtonGroupViewModel"],
        sourceKey: "CommonControls",
      },
      CollectionsPoiTransientLensViewModel: {
        className: "Microsoft.Maps.CollectionsPoiTransientLensViewModel",
        parameters: ["Map", "ControlTemplateFactory", "ButtonGroupViewModel"],
        sourceKey: "CommonControls",
      },
      ItineraryPoiTransientLensViewModel: {
        className: "Microsoft.Maps.ItineraryPoiTransientLensViewModel",
        parameters: ["Map", "ControlTemplateFactory", "ButtonGroupViewModel"],
        sourceKey: "CommonControls",
      },
      ListDropdownViewModel: {
        className: "Microsoft.Maps.CommonControls.ListDropdownViewModel",
        sourceKey: "CommonControls",
      },
      PopOutButtonViewModel: {
        className: "Microsoft.Maps.CommonControls.PopOutButtonViewModel",
        parameters: ["ListDropdownViewModel"],
        sourceKey: "CommonControls",
      },
      MapsInfobox: {
        className: "Microsoft.Maps.MapsInfobox",
        parameters: [
          "location",
          "-options",
          "-buttonGroupViewModel",
          "-taskId",
        ],
        sourceKey: "CommonControls",
      },
      LayoutManager: {
        className: "Microsoft.Maps.LayoutManager",
        parameters: [
          "Map",
          "TaskManager",
          "ControlTemplateFactory",
          "CoreConfig",
        ],
        sourceKey: "TaskFramework",
        isSingleton: true,
      },
      TaskManager: {
        className: "Microsoft.Maps.TaskManager",
        parameters: [
          "container",
          "Map",
          "-taskManagerOptions",
          "-BrowserHistoryManager",
        ],
        sourceKey: "TaskFramework",
        isSingleton: true,
      },
      CollectionsPoiTemplateSelector: {
        className: "Microsoft.Maps.CollectionsXsrPoiTemplateSelector",
        parameters: ["Map"],
        sourceKey: "TaskFramework",
        isSingleton: true,
      },
      TransitStopTaskPoiManager: {
        className: "Microsoft.Maps.TransitStopTaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      MicroPoiResultsPoiTemplateSelector: {
        className: "Microsoft.Maps.MicroPoiResultsPoiTemplateSelector",
        parameters: ["Map"],
        sourceKey: "TaskFramework",
      },
      XsrPoiTemplateSelector: {
        className: "Microsoft.Maps.XsrPoiTemplateSelector",
        parameters: ["Map"],
        sourceKey: "TaskFramework",
        isSingleton: true,
      },
      XsrBoundaryTemplateSelector: {
        className: "Microsoft.Maps.XsrBoundaryTemplateSelector",
        parameters: ["Map"],
        sourceKey: "TaskFramework",
        isSingleton: true,
      },
      ResultsTaskPoiManager: {
        className: "Microsoft.Maps.ResultsTaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector", "TaskManager"],
        sourceKey: "TaskFramework",
      },
      DetailsTaskPoiManager: {
        className: "Microsoft.Maps.DetailsTaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      PolygonBoundaryManager: {
        className: "Microsoft.Maps.PolygonBoundaryManager",
        parameters: ["Map", "XsrBoundaryTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      PolygonListingTaskPoiManager: {
        className: "Microsoft.Maps.PolygonListingTaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector", "TaskManager"],
        sourceKey: "TaskFramework",
      },
      CollectionsTaskPoiManager: {
        className: "Microsoft.Maps.CollectionsTaskPoiManager",
        parameters: ["Map", "CollectionsPoiTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      MicroPoiManager: {
        className: "Microsoft.Maps.MicroPoiManager",
        parameters: ["Map", "ClientPerf", "MicroPoiResultsPoiTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      NearbyTransitTaskPoiManager: {
        className: "Microsoft.Maps.NearbyTransitTaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      ItineraryTaskPoiManager: {
        className: "Microsoft.Maps.ItineraryTaskPoiManager",
        parameters: ["Map", "ItineraryTemplateSelector"],
        sourceKey: "TaskFramework",
      },
      ItineraryTemplateSelector: {
        className: "Microsoft.Maps.ItineraryTemplateSelector",
        parameters: ["Map"],
        sourceKey: "TaskFramework",
        isSingleton: true,
      },
      LocalGuideTaskPoiManager: {
        className: "Microsoft.Maps.LocalGuideTaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector", "TaskManager"],
        sourceKey: "TaskFramework",
      },
      LocalGuideL2TaskPoiManager: {
        className: "Microsoft.Maps.LocalGuideL2TaskPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector", "TaskManager"],
        sourceKey: "TaskFramework",
      },
      TopicSearchPoiManager: {
        className: "Microsoft.Maps.TopicSearchPoiManager",
        parameters: ["Map", "XsrPoiTemplateSelector", "TaskManager"],
        sourceKey: "TaskFramework",
      },
      TaskActivator: {
        className: "Microsoft.Maps.Internal.DataHandlers._TaskActivator",
        parameters: ["container", "TaskManager"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      TaskProcessDataHandler: {
        className:
          "Microsoft.Maps.Internal.DataHandlers._TaskProcessDataHandler",
        parameters: ["container", "TaskManager"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      StreetsideDataHandler: {
        className:
          "Microsoft.Maps.Internal.DataHandlers._StreetsideDataHandler",
        parameters: ["Map", "container"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      InstrumentationDataHandler: {
        className:
          "Microsoft.Maps.Internal.DataHandlers._InstrumentationDataHandler",
        parameters: ["LoggingWrapper"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      PrintDataHandler: {
        className: "Microsoft.Maps.Internal.DataHandlers._PrintDataHandler",
        parameters: ["PrintManager"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      PhotosynthDataHandler: {
        className:
          "Microsoft.Maps.Internal.DataHandlers._PhotosynthDataHandler",
        parameters: ["Map", "container"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      ShareDataHandler: {
        className: "Microsoft.Maps.Internal.DataHandlers._ShareDataHandler",
        parameters: ["Map", "TaskBar"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      LayerManagerDataHandler: {
        className:
          "Microsoft.Maps.Internal.DataHandlers._LayerManagerDataHandler",
        parameters: ["Map", "TaskBar"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      LayoutDataHandler: {
        className: "Microsoft.Maps.Internal.DataHandlers._LayoutDataHandler",
        parameters: ["TaskManager", "LayoutManager"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      MapViewDataHandler: {
        className: "Microsoft.Maps.Internal.DataHandlers._MapViewDataHandler",
        parameters: ["TaskManager"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      BirdsEyeV2DialogDataHandler: {
        className:
          "Microsoft.Maps.Internal.DataHandlers._BirdsEyeV2DialogDataHandler",
        parameters: ["Map"],
        sourceKey: "DataHandler",
        isSingleton: true,
      },
      DirectionsTask: {
        className: "Microsoft.Maps.Directions.DirectionsTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "GeolocationProvider",
          "ReverseGeocoder",
          "container",
          "ClientPerf",
          "SpatialMath",
        ],
        sourceKey: "Directions",
      },
      DirectionsFlipTask: {
        className: "Microsoft.Maps.Directions.DirectionsFlipTask",
        parameters: ["ControlTemplateFactory", "container"],
        sourceKey: "Directions",
      },
      StreetsideCoverageBehavior: {
        className: "Microsoft.Maps.Internal._StreetsideCoverageBehavior",
        parameters: ["CoreConfig", "ClientPerf"],
        sourceKey: "Streetside",
        isSingleton: true,
      },
      StreetsideBubblePickerOverlay: {
        className: "Microsoft.Maps.Internal._StreetsideBubblePickerOverlay",
        parameters: ["CoreConfig"],
        sourceKey: "Streetside",
        isSingleton: true,
      },
      NetworkBubblesSource: {
        className: "Microsoft.Maps.Internal.NetworkBubblesSource",
        sourceKey: "Streetside",
      },
      IBubblesSource: {
        className: "Microsoft.Maps.Internal.BubblesSourceProxy",
        parameters: ["NetworkBubblesSource"],
        sourceKey: "Streetside",
        isSingleton: true,
      },
      PhotosynthMode: {
        className: "Microsoft.Maps.PhotosynthMode",
        parameters: [
          "CoreConfig",
          "Map",
          "ReverseGeocoder",
          "ClientPerf",
          "TaskBar",
        ],
        sourceKey: "Streetside",
        isSingleton: true,
      },
      StreetsideMode: {
        className: "Microsoft.Maps.StreetsideMode",
        parameters: [
          "CoreConfig",
          "Map",
          "IBubblesSource",
          "ReverseGeocoder",
          "StreetsideModeBootstrapper",
          "ClientPerf",
          "-TaskBar",
          "-BrowserHistoryManager",
        ],
        sourceKey: "Streetside",
        isSingleton: true,
      },
      StreetsideMini: {
        className: "Microsoft.Maps.Internal._StreetsideMini",
        sourceKey: "Streetside",
        isSingleton: true,
      },
      StreetsideDirectionsMini: {
        className: "Microsoft.Maps.Internal._StreetsideMini",
        sourceKey: "Streetside",
        isSingleton: true,
      },
      StreetsideLocalDetailsMini: {
        className: "Microsoft.Maps.Internal._StreetsideMini",
        sourceKey: "Streetside",
      },
      SDKStreetsideMode: {
        className: "Microsoft.Maps.StreetsideMode",
        parameters: [
          "CoreConfig",
          "Map",
          "IBubblesSource",
          "ReverseGeocoder",
          "StreetsideModeBootstrapper",
          "ClientPerf",
        ],
        sourceKey: "Streetside",
        isSingleton: true,
      },
      CollectionsTask: {
        className: "Microsoft.Maps.Collections.CollectionsTask",
        parameters: [
          "Map",
          "ControlTemplateFactory",
          "GeolocationProvider",
          "CollectionsTaskPoiManager",
          "CollectionsPoiTransientLensViewModel",
          "TransientLens",
          "ClientPerf",
        ],
        sourceKey: "Collections",
        isSingleton: true,
      },
      MeasureMapTask: {
        className: "Microsoft.Maps.Collections.MeasureMapTask",
        parameters: [
          "ControlTemplateFactory",
          "DrawingToolsModule",
          "SpatialMath",
        ],
        sourceKey: "Collections",
        isSingleton: true,
      },
      MyContributionsV3Task: {
        className: "Microsoft.Maps.Collections.MyContributionsV3Task",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "Collections",
        isSingleton: true,
      },
      MyContributionsAndRewardsTask: {
        className: "Microsoft.Maps.Collections.MyContributionsAndRewardsTask",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "Collections",
        isSingleton: true,
      },
      MyPlacesMobileControl: {
        className: "Microsoft.Maps.Collections.MyPlacesMobileControl",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "Collections",
        isSingleton: true,
      },
      CollectionMobileControl: {
        className: "Microsoft.Maps.Collections.CollectionMobileControl",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "Collections",
        isSingleton: true,
      },
      MyContributionsMobileV2TaskViewModel: {
        className:
          "Microsoft.Maps.Collections.MyContributionsMobileV2TaskViewModel",
        parameters: ["ControlTemplateFactory", "Map"],
        sourceKey: "Collections",
        isSingleton: true,
      },
      MyContributionsMobileTask: {
        className: "Microsoft.Maps.Collections.MyContributionsMobileTask",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "Collections",
        isSingleton: true,
      },
      LayerManagerModule: {
        className: "Microsoft.Maps.LayerManager.LayerManagerModule",
        parameters: ["Map", "PoiTransientLensViewModel"],
        sourceKey: "LayerManager",
        isSingleton: true,
      },
      ItineraryDataManager: {
        className: "Microsoft.Maps.CloudGraphDataManager.ItineraryDataManager",
        sourceKey: "CloudGraphDataManager",
      },
      MostRecentlyUsedList: {
        className: "Microsoft.Maps.CloudGraphDataManager.MostRecentlyUsedList",
        sourceKey: "CloudGraphDataManager",
      },
      SaveDropdownControl: {
        className: "Microsoft.Maps.CloudGraphDataManager.SaveDropdownControl",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "CloudGraphDataManager",
      },
      AutoCollectionGenerator: {
        className:
          "Microsoft.Maps.CloudGraphDataManager.AutoCollectionGenerator",
        parameters: ["ReverseGeocoder", "SpatialMath"],
        sourceKey: "CloudGraphDataManager",
      },
      NewCollectionControl: {
        className: "Microsoft.Maps.CloudGraphDataManager.NewCollectionControl",
        parameters: ["ControlTemplateFactory"],
        sourceKey: "CloudGraphDataManager",
      },
      LocalSearchTask: {
        className: "Microsoft.Maps.Local.LocalSearchTask",
        parameters: [
          "Map",
          "ClientPerf",
          "LocalDetailsPageProcessor",
          "PoiTransientLensViewModel",
          "-TrafficLayerV2",
        ],
        sourceKey: "LocalSearch",
      },
      LocalListingTask: {
        className: "Microsoft.Maps.Local.LocalListingTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "LocalListingPageProcessor",
          "ResultsTaskPoiManager",
          "PoiTransientLensViewModel",
          "ClientPerf",
          "TransientLens",
          "MicroPoiManager",
        ],
        sourceKey: "LocalSearch",
      },
      HotelsListingTask: {
        className: "Microsoft.Maps.Local.HotelsListingTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "LocalListingPageProcessor",
          "ResultsTaskPoiManager",
          "PoiTransientLensViewModel",
          "ClientPerf",
          "TransientLens",
          "MicroPoiManager",
        ],
        sourceKey: "LocalSearch",
      },
      HouseListingTask: {
        className: "Microsoft.Maps.Local.HouseListingTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "LocalListingPageProcessor",
          "ResultsTaskPoiManager",
          "PoiTransientLensViewModel",
          "ClientPerf",
          "TransientLens",
          "MicroPoiManager",
        ],
        sourceKey: "LocalSearch",
      },
      RestaurantsListingTask: {
        className: "Microsoft.Maps.Local.RestaurantsListingTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "LocalListingPageProcessor",
          "ResultsTaskPoiManager",
          "PoiTransientLensViewModel",
          "ClientPerf",
          "TransientLens",
          "MicroPoiManager",
        ],
        sourceKey: "LocalSearch",
      },
      PolygonListingTask: {
        className: "Microsoft.Maps.Local.PolygonListingTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "PolygonListingPageProcessor",
          "PolygonListingTaskPoiManager",
          "PoiTransientLensViewModel",
          "ClientPerf",
          "TransientLens",
          "MicroPoiManager",
        ],
        sourceKey: "LocalSearch",
      },
      HouseDetailsTask: {
        className: "Microsoft.Maps.Local.HouseDetailsTask",
        parameters: [
          "Map",
          "LocalDetailsPageProcessor",
          "DetailsTaskPoiManager",
          "DetailsPoiTransientLensViewModel",
          "ButtonGroupViewModel",
          "ClientPerf",
          "ControlTemplateFactory",
          "-TaskBar",
          "-GeochainManager",
        ],
        sourceKey: "LocalSearch",
      },
      HotelsDetailsTask: {
        className: "Microsoft.Maps.Local.HotelsDetailsTask",
        parameters: [
          "Map",
          "LocalDetailsPageProcessor",
          "DetailsTaskPoiManager",
          "DetailsPoiTransientLensViewModel",
          "ButtonGroupViewModel",
          "ClientPerf",
          "ControlTemplateFactory",
          "-TaskBar",
          "-GeochainManager",
        ],
        sourceKey: "LocalSearch",
      },
      RestaurantDetailsTask: {
        className: "Microsoft.Maps.Local.RestaurantDetailsTask",
        parameters: [
          "Map",
          "LocalDetailsPageProcessor",
          "DetailsTaskPoiManager",
          "DetailsPoiTransientLensViewModel",
          "ButtonGroupViewModel",
          "ClientPerf",
          "ControlTemplateFactory",
          "-TaskBar",
          "-GeochainManager",
        ],
        sourceKey: "LocalSearch",
      },
      LocalDetailsTask: {
        className: "Microsoft.Maps.Local.LocalDetailsTask",
        parameters: [
          "Map",
          "LocalDetailsPageProcessor",
          "DetailsTaskPoiManager",
          "DetailsPoiTransientLensViewModel",
          "ButtonGroupViewModel",
          "ClientPerf",
          "ControlTemplateFactory",
          "-TaskBar",
          "-GeochainManager",
        ],
        sourceKey: "LocalSearch",
      },
      PolygonEntityDetailsTask: {
        className: "Microsoft.Maps.Local.PolygonEntityDetailsTask",
        parameters: [
          "Map",
          "LocalDetailsPageProcessor",
          "PolygonBoundaryManager",
          "DetailsPoiTransientLensViewModel",
          "ButtonGroupViewModel",
          "ClientPerf",
          "ControlTemplateFactory",
          "-TaskBar",
          "-GeochainManager",
        ],
        sourceKey: "LocalSearch",
      },
      LocalListingPageProcessor: {
        className: "Microsoft.Maps.Local.LocalListingPageProcessor",
        sourceKey: "LocalSearch",
      },
      LocalDetailsPageProcessor: {
        className: "Microsoft.Maps.Local.LocalDetailsPageProcessor",
        sourceKey: "LocalSearch",
      },
      PolygonListingPageProcessor: {
        className: "Microsoft.Maps.Local.PolygonListingPageProcessor",
        sourceKey: "LocalSearch",
      },
      Calendar: {
        className: "Microsoft.Maps.Calendar.Calendar",
        parameters: ["container"],
        sourceKey: "Calendar",
        factoryType: "Javascript",
      },
      SingleCalendar: {
        className: "Microsoft.Maps.Calendar.SingleCalendar",
        parameters: ["container"],
        sourceKey: "Calendar",
        factoryType: "Javascript",
      },
      TransitStopTask: {
        className: "Microsoft.Maps.Transit.TransitStopTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "TransitStopTaskPoiManager",
          "ButtonGroupViewModel",
          "container",
        ],
        sourceKey: "Transit",
      },
      TransitLineTask: {
        className: "Microsoft.Maps.Transit.TransitLineTask",
        parameters: ["ControlTemplateFactory", "Map", "container"],
        sourceKey: "Transit",
      },
      NearbyTransitTask: {
        className: "Microsoft.Maps.Transit.NearbyTransitTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "NearbyTransitTaskPoiManager",
          "container",
        ],
        sourceKey: "Transit",
      },
      LocalGuideBaseTask: {
        className: "Microsoft.Maps.LocalGuide.LocalGuideBaseTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "ResultsTaskPoiManager",
          "PoiTransientLensViewModel",
        ],
        sourceKey: "LocalGuide",
      },
      LocalGuideL2Task: {
        className: "Microsoft.Maps.LocalGuide.LocalGuideL2Task",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "LocalGuideL2TaskPoiManager",
          "PoiTransientLensViewModel",
        ],
        sourceKey: "LocalGuide",
      },
      LocalGuideTask: {
        className: "Microsoft.Maps.LocalGuide.LocalGuideTask",
        parameters: [
          "ControlTemplateFactory",
          "container",
          "Map",
          "LocalGuideTaskPoiManager",
          "TaskBar",
          "PoiTransientLensViewModel",
        ],
        sourceKey: "LocalGuide",
        isSingleton: true,
      },
      TrafficLegendControl: {
        className: "Microsoft.Maps.Traffic.TrafficLegendControl",
        sourceKey: "Traffic",
        isSingleton: true,
      },
      TrafficLegendOverlay: {
        className: "Microsoft.Maps.Traffic.TrafficLegendOverlay",
        parameters: ["TrafficLegend"],
        sourceKey: "Traffic",
        isSingleton: true,
      },
      TrafficLayerV2: {
        className: "Microsoft.Maps.Traffic.TrafficLayerV2",
        parameters: ["Map", "ControlTemplateFactory", "ClientPerf"],
        sourceKey: "Traffic",
        isSingleton: true,
      },
      TrafficTask: {
        className: "Microsoft.Maps.Traffic.TrafficTask",
        parameters: ["ControlTemplateFactory", "container", "Map"],
        sourceKey: "Traffic",
      },
      TrafficFlipTask: {
        className: "Microsoft.Maps.Traffic.TrafficFlipTask",
        parameters: ["ControlTemplateFactory", "container"],
        sourceKey: "Traffic",
      },
      ItineraryDetailsTask: {
        className: "Microsoft.Maps.Travel.ItineraryDetailsTask",
        parameters: [
          "ControlTemplateFactory",
          "container",
          "Map",
          "ItineraryTaskPoiManager",
          "ItineraryPoiTransientLensViewModel",
          "TransientLens",
          "ButtonGroupViewModel",
        ],
        sourceKey: "Travel",
      },
      ItineraryListingsTask: {
        className: "Microsoft.Maps.Travel.ItineraryListingsTask",
        parameters: ["ControlTemplateFactory", "container", "Map"],
        sourceKey: "Travel",
      },
      ItineraryDetailsMobileControl: {
        className: "Microsoft.Maps.Travel.ItineraryDetailsMobileControl",
        parameters: ["ControlTemplateFactory", "Map"],
        sourceKey: "Travel",
        isSingleton: true,
      },
      TaskBar: {
        className: "Microsoft.Maps.TaskBar",
        parameters: [
          "container",
          "Map",
          "ControlTemplateFactory",
          "TaskManager",
        ],
        sourceKey: "InternalControls",
        isSingleton: true,
      },
      Flyover: {
        className: "Microsoft.Maps.Flyover",
        parameters: ["Map"],
        sourceKey: "InternalControls",
        isSingleton: true,
      },
      SharingDialogViewModel: {
        className: "Microsoft.Maps.Internal.SharingDialogViewModel",
        parameters: ["Map", "TrafficLayerV2", "TaskManager", "Permalink"],
        sourceKey: "InternalControls",
      },
      PrintManager: {
        className: "Microsoft.Maps.Internal.PrintManager",
        parameters: ["Map", "TaskManager"],
        sourceKey: "InternalControls",
        isSingleton: true,
      },
      BirdsEyeV2DialogViewModel: {
        className: "Microsoft.Maps.Internal.BirdsEyeV2DialogViewModel",
        sourceKey: "MapDelay",
      },
      VenueMapTask: {
        className: "Microsoft.Maps.Local.VenueMapTask",
        parameters: ["Map", "ControlTemplateFactory"],
        sourceKey: "VenueMaps",
      },
      CommutabilityControl: {
        className: "Microsoft.Maps.Internal.CommutabilityControl",
        parameters: ["Map", "IsochroneLayer"],
        sourceKey: "Isochrone",
      },
      CommutabilityControlV2: {
        className: "Microsoft.Maps.Internal.CommutabilityControlV2",
        parameters: ["Map", "IsochroneLayer"],
        sourceKey: "Isochrone",
      },
      CommutabilityOverlay: {
        className: "Microsoft.Maps.Internal.CommutabilityControlOverlay",
        parameters: ["CommutabilityControl"],
        sourceKey: "InternalControls",
      },
      CommutabilityOverlayV2: {
        className: "Microsoft.Maps.Internal.CommutabilityControlV2Overlay",
        parameters: ["CommutabilityControlV2"],
        sourceKey: "InternalControls",
      },
      Landmarks3D: {
        className: "Microsoft.Maps.Landmarks3D",
        parameters: ["Map", "CoreConfig"],
        sourceKey: "InternalControls",
        isSingleton: true,
      },
      UserTipControl: {
        className: "Microsoft.Maps.Internal.UserTipControl",
        parameters: [
          "Map",
          "title",
          "messages",
          "-noFade",
          "-clickAwayToClose",
          "-isDark",
          "-isLinkMessage",
          "-tipTemplate",
          "-tipDisplayTime",
          "-cssOverride",
        ],
        sourceKey: "InternalControls",
      },
      Flywheel: {
        className: "Microsoft.Maps.FlywheelButtonViewModel",
        parameters: ["Map"],
        sourceKey: "InternalControls",
        isSingleton: true,
      },
      FlywheelBanner: {
        className: "Microsoft.Maps.FlywheelBannerViewModel",
        parameters: ["Map"],
        sourceKey: "InternalControls",
        isSingleton: true,
      },
      MapsFeedback: {
        className: "Microsoft.Maps.MapsFeedback",
        parameters: [
          "Map",
          "TaskBar",
          "TaskManager",
          "Permalink",
          "-footerFeedback",
          "-corpFeedback",
          "-SlideOutMenu",
        ],
        sourceKey: "Feedbacks",
        isSingleton: true,
      },
      FeedbackTask: {
        className: "Microsoft.Maps.FeedbackTask",
        parameters: [
          "ControlTemplateFactory",
          "Map",
          "MapsFeedback",
          "GeolocationProvider",
          "ClientPerf",
          "Geocoder",
          "ReverseGeocoder",
        ],
        sourceKey: "Feedbacks",
      },
      SDKMap: {
        className: "Microsoft.Maps.SDKMap",
        parameters: [
          "element",
          "-mapOptions",
          "container",
          "CoreConfig",
          "LoggingWrapper",
          "Dispatcher",
          "WorkDispatcher",
        ],
        sourceKey: "SDK",
      },
      DrawingToolsModule: {
        className: "Microsoft.Maps.Internal.DrawingToolsModule",
        sourceKey: "DT",
        isSingleton: true,
      },
      DrawingBar: {
        className: "Microsoft.Maps.Internal.DrawingBar",
        parameters: ["Map", "ControlTemplateFactory"],
        sourceKey: "DT",
      },
      EditingLayer: {
        className: "Microsoft.Maps.Internal.EditingLayer",
        parameters: [
          "Map",
          "HitTestController",
          "MapInteraction",
          "Dispatcher",
        ],
        sourceKey: "DT",
      },
      DrawingManager: {
        className: "Microsoft.Maps.Internal.DrawingManager",
        parameters: ["Map", "DrawingBar", "EditingLayer"],
        sourceKey: "DT",
      },
      MeasuringTool: {
        className: "Microsoft.Maps.Internal.MeasuringTool",
        parameters: ["Map", "EditingLayer"],
        sourceKey: "DT",
      },
      WellKnownText: {
        className: "Microsoft.Maps.WellKnownText",
        sourceKey: "WKT",
      },
      HeatMapLayer: {
        className: "Microsoft.Maps.HeatMapLayer",
        sourceKey: "HeatMap",
      },
      ChoroplethLayer: {
        className: "Microsoft.Maps.ChoroplethLayer",
        sourceKey: "Choropleth",
      },
      ClusterLayer: {
        className: "Microsoft.Maps.ClusterLayer",
        sourceKey: "Clustering",
      },
      DataBinningLayer: {
        className: "Microsoft.Maps.DataBinningLayer",
        sourceKey: "DataBinning",
      },
      ContourLayer: {
        className: "Microsoft.Maps.ContourLayer",
        sourceKey: "Contour",
      },
      VenueMap: {
        className: "Microsoft.Maps.VenueMaps.VenueMap",
        parameters: [
          "Map",
          "CustomMapStyleManager",
          "venueMapId",
          "venueMapMetadata",
          "venueMapOptions",
          "-templateSelector",
        ],
        sourceKey: "VenueMaps",
      },
      VenueMapsModule: {
        className: "Microsoft.Maps.VenueMaps.VenueMapsModule",
        sourceKey: "VenueMaps",
      },
      VenueMapFootprintsLayer: {
        className: "Microsoft.Maps.VenueMaps.VenueMapFootprintsLayer",
        parameters: ["Map", "CustomMapStyleManager", "layerOptions"],
        sourceKey: "VenueMaps",
      },
      IndoorRouteLayer: {
        className: "Microsoft.Maps.VenueMaps.IndoorRouteLayer",
        parameters: ["Map", "CustomMapStyleManager", "layerOptions"],
        sourceKey: "VenueMaps",
      },
      GeoDataAPIManager: {
        className: "Microsoft.Maps.SpatialDataService.GeoDataAPIManager",
        sourceKey: "SDS",
      },
      GeoJson: { className: "Microsoft.Maps.GeoJson", sourceKey: "GeoJson" },
      GeoXml: { className: "Microsoft.Maps.GeoXml", sourceKey: "GeoXml" },
      IsochroneLayer: {
        className: "Microsoft.Maps.IsochroneLayer",
        sourceKey: "Isochrone",
      },
      AutosuggestManager: {
        className: "Microsoft.Maps.AutosuggestManager",
        sourceKey: "AutosuggestSDK",
      },
      SpatialMath: {
        className: "Microsoft.Maps.SpatialMath",
        sourceKey: "SpatialMath",
      },
      SearchManager: {
        className: "Microsoft.Maps.Search.SearchManager",
        sourceKey: "SDKSearch",
      },
      TrafficManager: {
        className: "Microsoft.Maps.Traffic.TrafficManager",
        sourceKey: "SDKTraffic",
      },
      DirectionsManager: {
        className: "Microsoft.Maps.Directions.DirectionsManager",
        sourceKey: "DirectionsSDK",
      },
      ConfigurableMap: {
        className: "Microsoft.Maps.ConfigurableMap",
        sourceKey: "ConfigurableMap",
      },
    },
  };
  var Dragonfly2, Dragonfly;
  (function (n) {
    function t(t) {
      n.allowLogging && !1 && console.log(t);
    }
    function y(t) {
      var r, i;
      n.allowLogging &&
        ((r = document.getElementById("perfTestHook")),
        r &&
          ((i = r.getAttribute("data-loadOrder")),
          (i = i ? i + "," + t : t),
          r.setAttribute("data-loadOrder", i)));
    }
    function p(n) {
      var i = n.length,
        t;
      return i > 2 &&
        ((t = n.charAt(0)), t === n.charAt(i - 1) && (t === '"' || t === "'"))
        ? n.slice(1, i - 1)
        : null;
    }
    function w(n) {
      for (var t = n.length; t--; ) if (!n[t].loaded) return !1;
      return !0;
    }
    function b(n) {
      for (var u = [], i = n ? n.length : 0, t, r; i--; )
        (t = n[i] + ""),
          (r = t.charAt(0) === "-"),
          r && (t = t.substring(1)),
          (u[i] = { name: t, optional: r });
      return u;
    }
    function h(n) {
      var t = null,
        r,
        i,
        u,
        f;
      if (n)
        for (t = window, r = n.split("."), i = 0, u = r.length; i < u; i++)
          if (((f = r[i]), (t = t[f]), !t)) {
            t = null;
            break;
          }
      return t;
    }
    function nt(n, t) {
      var r = Object.create(n.prototype),
        i = n.apply(r, t);
      return i && typeof i == "object" ? i : r;
    }
    var o, s, r, u, c;
    n.version = "Dragonfly2";
    var l = "container",
      a = "window",
      f = /Factory$/,
      e = window.matchMedia("(-ms-high-contrast:active)").matches,
      i = Microsoft.Maps.GlobalConfig,
      v = Microsoft.Maps.Internal._CoreConfig();
    n.allowLogging = !1;
    o = (function () {
      function n(n, t) {
        this.config = n;
        this.resolver = t;
        this._factories = {};
        t.setContainer(this);
        this._setupFactories(n.factories);
      }
      return (
        (n.prototype.instanceAsync = function (n, i, r, u, f) {
          this._createInstance(n, r, !0, i, f, u);
          t("instanceAsync - ".concat(n));
        }),
        (n.prototype.instance = function (n, t) {
          return this._createInstance(n, t, !1);
        }),
        (n.prototype.instanceAsyncAll = function (n, t, i, r) {
          for (var f = {}, h = 0, u = !1, e = n.length, o = e; o--; ) {
            var s = n[o],
              c = function (n, i) {
                u || ((f[i] = n), ++h === e && t(f));
              },
              l = function (n, t) {
                u || ((u = !0), r && r(n, t));
              };
            this._createInstance(s.name, s.args, !0, c, l, i);
          }
        }),
        (n.prototype.registerInstance = function (n, t) {
          this._factories[n] = new u(n, { instance: t });
        }),
        (n.prototype.unregisterInstance = function (n) {
          delete this._factories[n];
        }),
        (n.prototype.dispose = function () {
          for (
            var i, n, r = Object.keys(this._factories), t = 0, u = r.length;
            t < u;
            t++
          )
            (i = this._factories[r[t]]),
              i && ((n = i.getInstance()), n && n.dispose && n.dispose()),
              (this._factories = {}),
              (this.isDisposed = !0);
        }),
        (n.prototype.checkConsistency = function () {
          var n = this;
        }),
        (n.prototype.getFactory = function (n, t) {
          var i = t ? this.config.factories : this._factories;
          return i[n.replace(f, "")];
        }),
        (n.prototype.canResolve = function (n) {
          return !!this.getFactory(n);
        }),
        (n.prototype.addCatalog = function (n) {
          for (
            var r,
              t,
              o = n.sources,
              u = n.factories,
              i = Object.keys(o),
              f = 0,
              e = i.length;
            f < e;
            f++
          )
            (t = i[f]), (this.config.sources[t] = o[t]);
          for (i = Object.keys(u), r = 0, e = i.length; r < e; r++)
            (t = i[r]), (this.config.factories[t] = u[t]);
          this._setupFactories(u);
        }),
        (n.prototype.downloadDependencyAsync = function (n, t) {
          this.downloadDependency(n, t, !0);
        }),
        (n.prototype.downloadDependency = function (n, t, i) {
          var r = this.getFactory(n);
          if (!r) throw "Factory ".concat(n, " not found");
          r.downloadDependency(t, i);
        }),
        (n.prototype._createInstance = function (n, t, i, r, u, e) {
          var o = this.getFactory(n),
            s;
          if (!o) {
            if (((s = "Factory ".concat(n, " not found")), i)) {
              u && u(n, s);
              return;
            }
            throw new Error(s);
          }
          if (f.test(n))
            return function (n) {
              return o.create(n);
            };
          if (i) o.createAsync(t, r, u, e);
          else return o.create(t);
        }),
        (n.prototype._setupFactories = function (n) {
          for (var t, f, r = Object.keys(n), i = 0, e = r.length; i < e; i++)
            (t = r[i]),
              (f = n[t]),
              (this._factories[t] = new u(t, f, this.resolver, this));
        }),
        n
      );
    })();
    n.Container = o;
    s = (function () {
      function u(n, t) {
        this.config = n;
        this.logger = t;
        this._externLoader = n.externloader;
        this._sources = n.sources;
        this._factories = n.factories;
        this._endpointCallbacks = {};
      }
      return (
        (u.prototype.resolve = function (n, t) {
          this._fetchDependencies(n.sourceKey, this._getDependencyChain(n), t);
        }),
        (u.prototype.isResolved = function (n) {
          return (
            this._getNeededDependencies(this._getDependencyChain(n)).length ===
            0
          );
        }),
        (u.prototype.setContainer = function (n) {
          this._container = n;
        }),
        (u.prototype._getDepChainSK = function (n) {
          var u = new r(),
            t,
            f,
            e,
            o;
          if (!n) return u;
          if (((t = this._sources[n]), !t))
            throw "Could not resolve sourceKey: ".concat(n);
          for (
            f =
              t.sdkDependencies && i.isSDK ? t.sdkDependencies : t.dependencies,
              e = f && f.length;
            e--;

          )
            (o = this._getDepChainSK(f[e])), u.append(o);
          return u.add(n, t), u;
        }),
        (u.prototype._getDepChainFact = function (n) {
          var t = n.chain,
            u,
            f,
            i,
            e;
          if (!t) {
            for (t = new r(), u = n.parameters, f = u && u.length; f--; )
              (i = u[f]),
                i.charAt(0) === "-" && (i = i.substring(1)),
                (e = this._container.getFactory(i, !0)),
                !e || t.append(this._getDepChainFact(e));
            t.append(this._getDepChainSK(n.sourceKey));
            n.chain = t;
          }
          return t;
        }),
        (u.prototype._getDependencyChain = function (n) {
          return typeof n == "string"
            ? this._getDepChainSK(n)
            : this._getDepChainFact(n);
        }),
        (u.prototype._getNeededDependencies = function (n) {
          for (var t, r = [], u = {}, i = 0, f = n.length; i < f; i++)
            (t = n.get(i)),
              u.hasOwnProperty(t.endpoint) ||
                (t.loaded || r.push(t), (u[t.endpoint] = 1));
          return r;
        }),
        (u.prototype._fetchDependencies = function (r, u, f) {
          var o = this._getNeededDependencies(u),
            h,
            s,
            c,
            l,
            a;
          if (n.allowLogging) {
            for (h = [], s = 0, c = o.length; s < c; s++)
              (l =
                e && o[s].highContrastEndpoint
                  ? o[s].highContrastEndpoint
                  : o[s].endpoint),
                h.push(l);
            t(
              "fetchDependencies for "
                .concat(r, ", dependencies: ")
                .concat(h.length > 0 ? h.join() : "none"),
            );
          }
          a = function (n) {
            for (
              var r,
                u,
                t,
                e,
                s = document.getElementsByTagName("head")[0],
                o = 0,
                h = n.length;
              o < h;
              o++
            )
              (r = n[o]),
                (u = r.savedResponse),
                u &&
                  ((r.savedResponse = undefined),
                  r.sourceType !== "css" && r.sourceType !== "Stylesheet"
                    ? ((t = document.createElement("script")),
                      i.addCrossOriginAttr && (t.crossOrigin = "anonymous"),
                      (t.type = "text/javascript"),
                      (t.async = !1),
                      (t.text = u),
                      s.appendChild(t))
                    : ((e = document.createElement("style")),
                      (e.type = "text/css"),
                      (e.textContent = u),
                      s.appendChild(e)));
            f && f();
          };
          o.length > 0 ? this._requestBundle(r, o, a) : f && f();
        }),
        (u.prototype._onRequestComplete = function (n, i, r, u) {
          return function (f) {
            var e, o;
            if (
              ((i.loaded = !0),
              t(
                "onRequestComplete for "
                  .concat(n, ", source ")
                  .concat(i.endpoint),
              ),
              f && (i.savedResponse = f),
              w(r) && u && u(r),
              (e = i.pendingCallbacks),
              e)
            )
              for (o = void 0; (o = e.pop()); ) o();
          };
        }),
        (u.prototype._createReq = function (n, i) {
          var r = new c(i, n, this.logger);
          return t("createRequest - endpoint : ".concat(n)), r;
        }),
        (u.prototype._requestBundle = function (n, i, r) {
          for (var u, f, h, o, a, c, s = 0, l = i.length; s < l; s++)
            if (
              ((u = i[s]),
              (f =
                e && u.highContrastEndpoint
                  ? u.highContrastEndpoint
                  : u.endpoint),
              t(
                "requestBundle - "
                  .concat(u.sourceType, ", source ")
                  .concat(f || ""),
              ),
              (h = this._endpointCallbacks[f]),
              (o = this._onRequestComplete(n, u, i, r)),
              h)
            )
              h.loaded ? o() : h.pendingCallbacks.push(o);
            else if (((a = u.pendingCallbacks), a)) u.pendingCallbacks.push(o);
            else if (
              ((u.pendingCallbacks = []), u.external && this._externLoader)
            )
              this._externLoader(u, o);
            else if (f)
              (c = this._createReq(f, u.sourceType)),
                (c.oncomplete = o),
                (this._endpointCallbacks[f] = u),
                c.send();
            else throw new Error("Unrecognized source definition");
        }),
        u
      );
    })();
    n.DependencyResolver = s;
    r = (function () {
      function n() {
        this._hash = {};
        Array.prototype.push.apply(this, []);
      }
      return (
        (n.prototype.get = function (n) {
          var t = this[n];
          return t && t.value;
        }),
        (n.prototype.add = function (n, t) {
          this._hash[n] ||
            ((this._hash[n] = !0),
            Array.prototype.push.call(this, { key: n, value: t }));
        }),
        (n.prototype.append = function (n) {
          for (var i, t = 0, r = n.length; t < r; t++)
            (i = n[t]), this.add(i.key, i.value);
        }),
        n
      );
    })();
    r.prototype.length = Array.prototype.length;
    u = (function () {
      function n(n, t, i, r) {
        this.factoryName = n;
        this.factoryDef = t;
        this.resolver = i;
        this.container = r;
        this._className = t.className;
        this._params = b(t.parameters);
        this._isSingleton = t.isSingleton;
        this._constructor = null;
        this._dependenciesResolved = !1;
        this._instance = t.instance || undefined;
      }
      return (
        (n.prototype.create = function (n) {
          var i, u, f, e, v;
          if (((n = n || {}), this._instance)) return this._instance;
          if (
            !this.container.isDisposed &&
            (this._dependenciesResolved ||
              this.resolver.isResolved(this.factoryDef))
          ) {
            for (
              this._dependenciesResolved = !0, i = [], u = this._params.length;
              u--;

            ) {
              var o = this._params[u],
                r = o.name,
                s = p(r);
              if (s) i[u] = s;
              else if (r === l) i[u] = this.container;
              else if (r === a) i[u] = window;
              else if (this.container.canResolve(r) && !n[r])
                i[u] = this.container.instance(r, {});
              else if (((i[u] = n[r]), !o.optional && n[r] === undefined))
                throw 'The parameter "'.concat(
                  r,
                  '" is required but was not supplied.',
                );
            }
            if (
              (this._constructor || (this._constructor = h(this._className)),
              (f = void 0),
              this.factoryDef.factoryType === "reference")
            )
              f = this._constructor;
            else
              try {
                t("create - makeObject : class ".concat(this._className));
                f = nt(this._constructor, i);
                t("create - after makeObject : args count ".concat(i.length));
              } catch (c) {
                e = this.resolver.logger;
                e &&
                  e.logCriticalError &&
                  ((v = {
                    feature: "Dragonfly",
                    action: "ERR",
                    data: {
                      errorMessage: "Error creating ".concat(this._className),
                    },
                  }),
                  e.logCriticalError(c, v, !0, !0));
                throw c;
              }
            return (
              f.initialize && f.initialize.apply(f, i),
              this._isSingleton && (this._instance = f),
              f
            );
          }
          throw "Failed to create ".concat(this.factoryName);
        }),
        (n.prototype.createAsync = function (n, t, i, r) {
          var u = this;
          r
            ? this.createInternal(n, t, i)
            : Microsoft.Maps.setAsync(function () {
                u.createInternal(n, t, i);
              });
        }),
        (n.prototype.createInternal = function (n, i, r) {
          var u = this,
            f;
          this._instance
            ? i && i(this._instance, this.factoryName)
            : ((f = function () {
                var e, f;
                u._dependenciesResolved = !0;
                try {
                  t("createAsync - _factoryName ".concat(u.factoryName));
                  e = u.create(n);
                  i && i(e, u.factoryName);
                } catch (o) {
                  f = u.resolver.logger;
                  f &&
                    f.logCriticalError &&
                    f.logCriticalError(o, null, !0, !0);
                  r && r(u.factoryName, o);
                }
              }),
              this.resolver.resolve(this.factoryDef, f));
        }),
        (n.prototype.downloadDependency = function (n, i) {
          var r = this,
            u = function () {
              var i = function () {
                t("resolved factoryName ".concat(r.factoryName));
                n && n();
              };
              r.resolver.resolve(r.factoryDef, i);
            };
          i
            ? Microsoft.Maps.setAsync(function () {
                u();
              })
            : u();
        }),
        (n.prototype.getInstance = function () {
          return this._instance;
        }),
        n
      );
    })();
    c = (function () {
      function n(n, t, i) {
        this.sourceType = n;
        this.endpoint = t;
        this.logger = i;
        this._retryCount = 0;
        this.onerror = function () {};
        this.oncomplete = function () {};
        this._startRequestWithRetry();
      }
      return (
        (n.prototype.send = function () {
          var n =
              this._retryCount === 0
                ? this.endpoint
                : ""
                    .concat(this.endpoint)
                    .concat(this.endpoint.includes("?") ? "&" : "?", "retry=")
                    .concat(this._retryCount),
            i;
          this.sourceType !== "css" && this.sourceType !== "Stylesheet"
            ? (this.sourceElement.src = n)
            : (this.sourceElement.href = n);
          t("createReq - send: ".concat(n));
          y(n);
          i = document.getElementsByTagName("head")[0];
          i.appendChild(this.sourceElement);
        }),
        (n._getSourceElem = function (n) {
          var t, r;
          return (
            n !== "css" && n !== "Stylesheet"
              ? ((t = document.createElement("script")),
                i.addCrossOriginAttr && (t.crossOrigin = "anonymous"),
                (t.type =
                  t.async !== undefined ? "text/javascript" : "text/plain"),
                (t.async = !1),
                (t.patch = function () {
                  if (this.type === "text/plain") {
                    var t = this.parentNode,
                      n = document.createElement("script");
                    i.addCrossOriginAttr && (n.crossOrigin = "anonymous");
                    n.type = "text/javascript";
                    n.src = this.src;
                    t.replaceChild(n, this);
                  }
                }))
              : ((t = document.createElement("link")),
                (t.type = "text/css"),
                t.setAttribute("rel", "stylesheet"),
                i.addCrossOriginAttr &&
                  i.isSDK &&
                  t.setAttribute("crossorigin", "anonymous")),
            (r = i.dynamicProperties.referrerPolicy),
            r && (t.referrerPolicy = r),
            t
          );
        }),
        (n.prototype._startRequestWithRetry = function () {
          var i = this;
          this.sourceElement = n._getSourceElem(this.sourceType);
          this.sourceElement.onload = function () {
            return i._onstatechange();
          };
          this.sourceElement.onerror = function () {
            var n = "WrappedRequest onerror ["
              .concat(i._retryCount, "]: ")
              .concat(i.endpoint);
            if (
              (t(n),
              i.logger &&
                i.logger.logCriticalError &&
                i.logger.logCriticalError(new Error(n), null, !0, !0),
              i._retryCount < v.maxDragonflyResourceRetry)
            )
              i._retryCount++, i._startRequestWithRetry(), i.send();
            else {
              i._onstatechange();
              i.onerror(0);
            }
          };
        }),
        (n.prototype._onstatechange = function () {
          var n = this.sourceElement,
            t = n.readyState;
          this._done ||
            (t && !/loaded|complete/.test(t)) ||
            ((this._done = !0), n.patch && n.patch(), this.oncomplete());
        }),
        n
      );
    })();
  })(Dragonfly2 || (Dragonfly2 = {}));
  Dragonfly = Dragonfly2;
  var InstrumentationBase = (function () {
      function n(t, i) {
        this._clientInstEventFormatString =
          i.logClientInstEventFormatString.replace("{EventType}", t);
        n._timerInterval = i.logFlushIntervalInSeconds
          ? i.logFlushIntervalInSeconds * 1e3
          : 1e3;
        n._instrumentationUrl = i.instrumentationUrl.replace(
          "{origin}",
          Microsoft.Maps.GlobalConfig.dynamicProperties.origin,
        );
        n._coreConfig = i;
      }
      return (
        (n.prototype.logObject = function (t, i) {
          var r, u, f;
          t.overlay || ((r = n.getOverlayType()), r && t && (t.overlay = r));
          u = window.JSON && window.JSON.stringify;
          f = this._clientInstEventFormatString
            .replace("{TimeStamp}", Date.now().toString(10))
            .replace(
              "{ImpressionGUID}",
              i || mapsNamespace.GlobalConfig.dynamicProperties.impressionGuid,
            )
            .replace("{DATA}", u ? u(t) : "");
          n.logList.push(f);
          this.startTimer();
        }),
        (n.prototype.flush = function () {
          n._timerToken &&
            (window.clearTimeout(n._timerToken), (n._timerToken = 0));
          this._postInstrumentationData();
        }),
        (n.prototype.clear = function () {
          n.logList.length = 0;
        }),
        (n.prototype.startTimer = function () {
          var t = this;
          n._timerToken ||
            (n._timerToken = Microsoft.Maps.setTimeout(function () {
              t.processTimerEvent();
            }, n._timerInterval));
        }),
        (n.prototype.processTimerEvent = function () {
          n._timerToken = 0;
          this.flush();
        }),
        (n.prototype._postInstrumentationData = function () {
          var t = mapsNamespace.Internal._Network,
            i,
            r;
          n.logList.length > 0 &&
            (t
              ? ((i = n._coreConfig.logClientInstRequestFormatString.replace(
                  "{Events}",
                  n.logList.join(""),
                )),
                (r = { "Content-Type": "text/plain;charset=UTF-8" }),
                t.doPost(n._instrumentationUrl, i, { headers: r }),
                this.clear())
              : this.startTimer());
        }),
        (n.getOverlayType = function () {
          var i = "",
            r = Microsoft && Microsoft.Maps && Microsoft.Maps.GlobalConfig,
            n =
              r && r.dynamicProperties
                ? Microsoft.Maps.GlobalConfig.dynamicProperties
                : null,
            t;
          return (
            n &&
              r.isMapsAnswer &&
              (n.localOverlayOnSerp && n.localOverlayOnSerp.visible
                ? ((t = n.localOverlayOnSerp.searchQueryCategory),
                  (i =
                    t &&
                    t.toLowerCase &&
                    (t.toLowerCase() === "hotel" ||
                      t.toLowerCase() === "restaurant")
                      ? t.toLowerCase()
                      : "local"))
                : n.travelOverlayOnSerp && n.travelOverlayOnSerp.visible
                ? (i = "travel")
                : n.realEstateOverlayOnSerp && n.realEstateOverlayOnSerp.visible
                ? (i = n.realEstateOverlayOnSerp.isApartmentSegment
                    ? "apartment"
                    : "realestate")
                : n.attractionOverlayOnSerp && n.attractionOverlayOnSerp.visible
                ? (i = "attraction")
                : n.mapsOverlayOnSerp &&
                  n.mapsOverlayOnSerp.visible &&
                  ((t = n.mapsOverlayOnSerp.searchQueryCategory),
                  (i =
                    t &&
                    t.toLowerCase &&
                    (t.toLowerCase() === "hotel" ||
                      t.toLowerCase() === "restaurant")
                      ? t.toLowerCase()
                      : "maps"))),
            i
          );
        }),
        (n.SendInstrumentationToServer = function (t, i) {
          var u = Microsoft && Microsoft.Maps && Microsoft.Maps.GlobalConfig,
            r,
            f,
            e,
            o;
          u &&
            u.enableInstrumentation &&
            i &&
            ((r = mapsNamespace.Internal._CoreConfig()
              .serverInstrumentationUrlFormat.replace(
                "{origin}",
                u.dynamicProperties.origin,
              )
              .replace("{q}", t ? t : "")
              .replace("{f}", i)),
            (f = "MONITR"),
            window.location.href.toUpperCase().indexOf(f) > -1 &&
              (r += "&FORM=" + f),
            (e = n.getOverlayType()),
            e && (r += "&OVRLY=" + e),
            (o = u.dynamicProperties.mapsIG),
            o && (r += "&MCIG=" + o),
            mapsNamespace.Internal._Network.downloadGeneric(
              r,
              "srvinst",
              function () {},
              null,
              null,
              null,
              3,
            ));
        }),
        (n.logList = []),
        (n._timerToken = 0),
        n
      );
    })(),
    __extends =
      (this && this.__extends) ||
      (function () {
        var n = function (t, i) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, t) {
                  n.__proto__ = t;
                }) ||
              function (n, t) {
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
              }),
            n(t, i)
          );
        };
        return function (t, i) {
          function r() {
            this.constructor = t;
          }
          if (typeof i != "function" && i !== null)
            throw new TypeError(
              "Class extends value " +
                String(i) +
                " is not a constructor or null",
            );
          n(t, i);
          t.prototype =
            i === null
              ? Object.create(i)
              : ((r.prototype = i.prototype), new r());
        };
      })(),
    Logger = (function (n) {
      function t(t) {
        var i = n.call(this, "Event.ClientInst", t) || this;
        return (
          (i._exceptionCount = 0),
          (Microsoft.Maps.errorLogs = Microsoft.Maps.errorLogs || []),
          i
        );
      }
      return (
        __extends(t, n),
        (t.prototype.logObject = function (i, r, u) {
          i.T = i.T ? i.T : u ? t.MapsAction : t.ClientClick;
          i.FID = i.FID ? i.FID : t.ClientInstNamespace;
          n.prototype.logObject.call(this, i, r);
        }),
        (t.prototype.logCriticalError = function (n, i, r, u) {
          var s;
          r === void 0 && (r = !0);
          var e = mapsNamespace.GlobalConfig,
            c = mapsNamespace.Internal._CoreConfig().mapcontrolVersion,
            f = i && i.data && i.data.url;
          if (
            ((f = f && f.toLowerCase()),
            e.testHooksAllowed ||
              ((e.enableInstrumentation || e.enableErrorInstrumentation) &&
                (!f ||
                  f.indexOf("virtualearth.net") > -1 ||
                  f.indexOf("azureedge.net") > -1 ||
                  f.indexOf("bing.com") > -1 ||
                  f.indexOf("microsoft.com") > -1 ||
                  f.indexOf("live.com") > -1 ||
                  f.indexOf("bingapis.com") > -1)))
          ) {
            f &&
              ((i.data.url = this._cleanUrl(f)),
              performance.getEntries &&
                (i.data.perfTiming = performance
                  .getEntries()
                  .filter(function (n) {
                    return n.name.toLowerCase() === f;
                  })));
            s = n ? n.stack : f ? f : "";
            i && i.data && i.data.stack && (s += ";" + i.data.stack);
            (e.isMapsVertical || e.isMapsAnswer) &&
              r &&
              (s += ";" + window.location.href);
            var h = !n && f,
              o = {
                T: h ? t.MapsWarning : t.MapsError,
                feature: "SDK",
                action: i ? i.action : "",
                data: i ? i.data : "",
                partner: "Maps",
                horizontal: e.isMapsVertical
                  ? "Vertical"
                  : e.isMapsAnswer
                  ? "MapSerp"
                  : "SDK" + c,
                Name: h ? "MapsNetwork" : "JSError",
                Text: n
                  ? typeof n == "string"
                    ? n
                    : n.message
                  : i
                  ? this._serializeData(i.data)
                  : "",
                Stack: s,
              },
              l = n ? "unhandledEx:" : f ? "network:" : "handledEx:";
            if (
              ((o.Text = o.horizontal + ";" + l + o.Text),
              (e.testHooksAllowed || !e.isSDK) &&
                Microsoft.Maps.errorLogs.push(o),
              e.testHooksAllowed &&
                (console.log(
                  "".concat(
                    Date.now() - performance.timing.navigationStart,
                    " - Error:",
                  ),
                ),
                h && f
                  ? console.log(
                      "Network error - status:"
                        .concat(i.data.httpStatus, ", url: ")
                        .concat(f),
                    )
                  : (console.log("Error - message:".concat(o.Text)),
                    console.log("Error - stack:".concat(o.Stack))),
                console.log("")),
              n)
            ) {
              if (
                (e.isSDK || typeof _G == "undefined" || u
                  ? this.logObject(o, e.dynamicProperties.mapsIG)
                  : (n.message = o.Text),
                !u)
              )
                throw n;
            } else
              ++this._exceptionCount <= 16 &&
                (this.logObject(o, e.dynamicProperties.mapsIG), this.flush());
          }
          if (n && !u) throw n;
        }),
        (t.prototype._serializeData = function (n) {
          var i = "",
            t;
          if (n)
            if (typeof n == "object")
              for (t in n)
                n.hasOwnProperty(t) &&
                  n[t] !== "" &&
                  t.toLowerCase() !== "stack" &&
                  (i =
                    i +
                    t +
                    ":" +
                    (typeof n[t] == "object" ? JSON.stringify(n[t]) : n[t]) +
                    ", ");
            else i = n;
          return i;
        }),
        (t.prototype._cleanUrl = function (n) {
          return (
            n &&
              (n = n
                .replace(/(\/|\/be|\/hs)[0123]+(\?|\.json\?)/gi, "/{quadkey}?")
                .replace(/key=(\w|-)+/gi, "key={credentials}")
                .replace(/auth=(\w|-)+/gi, "auth={credentials}")
                .replace(/jsonso=\w+/gi, "jsonso={jsonso}")
                .replace(/jsonp=(\w|\.)+/gi, "jsonp={jsonp}")
                .replace(/t[01](\.|-)/gi, "{subdomain}")
                .replace(/^(http:|https:)/gi, "{protocol}:")
                .replace(/mkt=\w{2}-\w{2}/gi, "mkt={mkt}")
                .replace(/culture=\w{2}-\w{2}/gi, "culture={culture}")
                .replace(/og=\d+/gi, "og={og}")
                .replace(/ur=\w{2}/gi, "ur={ur}")
                .replace(/idx=\d+/gi, "idx={idx}")
                .replace(/eid=\d+/gi, "eid={eid}")
                .replace(
                  /copyright\/\w{2}-\w{2}\/\w+(\/(\d|\.|-)+){5}\?/gi,
                  "copyright/{Copyright}?",
                )
                .replace(
                  /locations\/(\d |\.|,|-)+\?/gi,
                  "location/{locations}?",
                )),
            n
          );
        }),
        (t.ClientInstNamespace = "CI"),
        (t.MapsError = "CI.Error"),
        (t.MapsWarning = "CI.Warning"),
        (t.MapsAction = "CI.MapsAction"),
        (t.ClientClick = "CI.ClientClick"),
        t
      );
    })(InstrumentationBase),
    coreConfig = mapsNamespace.Internal._CoreConfig(),
    dependencyResolver,
    dragonflyContainer;
  window.InstrumentationBase = InstrumentationBase;
  window.Logger = Logger;
  coreConfig.useAmdLoader &&
    ((window.define = window.define || amd.define),
    (window.require = window.require || amd.require));
  Dragonfly["{experimental}"] = !0;
  mapsNamespace.logger = new Logger(coreConfig);
  Microsoft.Maps.notifyMapReadyForBootstrap = function () {
    if (
      (mapsNamespace.Module.container ||
        (mapsNamespace.Module.container = dragonflyContainer),
      mapsNamespace.Internal._PerfV2BSCTime ||
        (mapsNamespace.Internal._PerfV2BSCTime = Date.now()),
      Microsoft.Maps.CallbackOnLoad)
    ) {
      var n = window[Microsoft.Maps.CallbackOnLoad];
      n
        ? n()
        : Microsoft.Maps.setTimeout(
            Microsoft.Maps.notifyMapReadyForBootstrap,
            100,
          );
    }
  };
  dependencyResolver = new Dragonfly.DependencyResolver(
    dragonflyCatalog,
    mapsNamespace.logger,
  );
  dependencyResolver.isResolved = function () {
    return !0;
  };
  dragonflyContainer = new Dragonfly.Container(
    dragonflyCatalog,
    dependencyResolver,
  );
  dragonflyContainer.downloadDependencyAsync("NavigationBar");
  dragonflyContainer.downloadDependency("SDKMap");
  Microsoft.Maps.MapTypeId &&
    Microsoft.Maps.setTimeout(function () {
      var n = mapsNamespace.Internal._CoreConfig();
      mapsNamespace.Internal._prefetchXsr(
        n,
        Microsoft.Maps.MapTypeId,
        typeof Microsoft.Maps.IsLiteMode == "boolean"
          ? Microsoft.Maps.IsLiteMode
          : n.liteMode,
      );
    }, 500);
  mapsNamespace.loadMap = function (n, t, i) {
    mapsNamespace.Internal._PerfV2ISTime ||
      (mapsNamespace.Internal._PerfV2ISTime = Date.now());
    n &&
      n.mapOptions &&
      n.mapOptions.testHooksOptions &&
      n.mapOptions.testHooksOptions.enableFunctionalTestHooks &&
      (Dragonfly.allowLogging = !0);
    var r = new Dragonfly.Container(dragonflyCatalog, dependencyResolver);
    r.instanceAsync(
      "SDKMap",
      function (n) {
        n._mapLoaded.addOne(function () {
          i || t(n);
        });
        i && t(n.getV8Map());
      },
      n,
    );
  };
  Microsoft.Maps.Map = function (n, t) {
    mapsNamespace.Internal._PerfV2ISTime ||
      (mapsNamespace.Internal._PerfV2ISTime = Date.now());
    t = t || {};
    t.mapOptions &&
      t.mapOptions.testHooksOptions &&
      t.mapOptions.testHooksOptions.enableFunctionalTestHooks &&
      (Dragonfly.allowLogging = !0);
    var i = new Dragonfly.Container(dragonflyCatalog, dependencyResolver);
    return i.instance("SDKMap", { element: n, mapOptions: t });
  };
  Microsoft.Maps.Map.getClosestPanorama = function (n, t, i) {
    dragonflyContainer.instanceAsync("IBubblesSource", function (r) {
      r.getBubbles(
        n,
        1,
        function (n) {
          t(n && n[0]);
        },
        i,
      );
    });
  };
  Microsoft.Maps.Map.getVersion = function () {
    return mapsNamespace.Internal._CoreConfig().mapcontrolVersion;
  };
}).call(window);
