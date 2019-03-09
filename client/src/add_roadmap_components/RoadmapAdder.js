import React, { Component } from "react";

import TreeDisplayAdd from "./TreeDisplayAdd.js";
import TreeSidebarAdd from "./TreeSidebarAdd";
import TreeSidebar from "../components/TreeSidebar.js";
import AccordionExampleStandard from "./AccordionComponent";
import uuid from "uuid";
import { addRoadmap } from "../actions/roadmapAction";
import { connect } from "react-redux";
import {
  Grid,
  Button,
  Form,
  Input,
  Select,
  TextArea,
  Accordion
} from "semantic-ui-react";
import MediaQuery from "react-responsive";
import Add from "../images/189754-user-interface/svg/add.svg";
import {
  circle,
  acm,
  addthis,
  adobe,
  airbnb,
  amazon,
  amazonaws,
  amd,
  americanexpress,
  android,
  angellist,
  angular,
  apple,
  applemusic,
  appveyor,
  archiveofourown,
  archlinux,
  artstation,
  asana,
  atlassian,
  atom,
  aurelia,
  auth0,
  automatic,
  autotask,
  aventrix,
  azuredevops,
  baidu,
  bandcamp,
  basecamp,
  bathasu,
  beats,
  behance,
  bigcartel,
  bing,
  bitbucket,
  bitdefender,
  bitly,
  blender,
  java,
  javascript,
  boost,
  bootstrap,
  bower,
  branddotai,
  buffer,
  buzzfeed,
  cakephp,
  campaignmonitor,
  cashapp,
  castorama,
  castro,
  circleci,
  clockify,
  clojure,
  cloudflare,
  codacy,
  codecademy,
  codecov,
  codeforces,
  codeigniter,
  codepen,
  coderwall,
  codesandbox,
  codeship,
  codewars,
  codio,
  coffeescript,
  compropago,
  condaforge,
  conekta,
  coursera,
  cplusplus,
  css3,
  csswizardry,
  d3js,
  dailymotion,
  dazn,
  dblp,
  debian,
  deezer,
  dependabot,
  designernews,
  devdotto,
  deviantart,
  devrant,
  digg,
  digitalocean,
  discord,
  django,
  docker,
  dotnet,
  dropbox,
  drupal,
  dtube,
  ebay,
  eclipseide,
  elasticcloud,
  elasticsearch,
  elasticstack,
  empirekred,
  envato,
  eslint,
  ethereum,
  etsy,
  eventbrite,
  eventstore,
  evernote,
  everplaces,
  expertsexchange,
  facebook,
  fandango,
  feedly,
  firebase,
  flickr,
  freecodecamp,
  gatsby,
  github,
  gitlab,
  glassdoor,
  gmail,
  goodreads,
  google,
  graphql,
  groupon,
  hackerrank,
  hackhands,
  hackster,
  heroku,
  hockeyapp,
  homify,
  hootsuite,
  html5,
  huawei,
  imdb,
  inkscape,
  instagram,
  intercom,
  intel,
  internetexplorer,
  jsfiddle,
  jupyter,
  kaggle,
  khanacademy,
  kickstarter,
  leetcode,
  linkedin,
  mailchimp,
  medium,
  meetup,
  microsoft,
  mongodb,
  mozillafirefox,
  mysql,
  nintendo,
  nodedotjs,
  nodemon,
  npm,
  nvidia,
  oculus,
  patreon,
  pinterest,
  postgresql,
  python,
  quora,
  raspberrypi,
  react,
  reddit,
  redux,
  safari,
  salesforce,
  samsung,
  scribd,
  shopify,
  snapchat,
  soundcloud,
  stackexchange,
  stackoverflow,
  stripe,
  sublimetext,
  swift,
  teespring,
  tencentqq,
  tinder,
  topcoder,
  treehouse,
  tripadvisor,
  tumblr,
  twitch,
  twitter,
  ubuntu,
  uber,
  udacity,
  udemy,
  upwork,
  visualstudiocode,
  webpack,
  whatsapp,
  wikipedia,
  wolfram,
  youtube,
  zillow,
  zendesk
} from "../images/svgIcons";
class RoadmapAdder extends Component {
  constructor(props) {
    super(props);

    this.saveRoadmap = this.saveRoadmap.bind(this);
    this.state = {
      name: "plac1",
      category: "yah",
      time_completion: 0,
      author_description: "",
      roadmap_debrief: "",
      isThereError: false,

      current_extra_info: "",
      current_extra_form_mode: "editable",

      showForm: "showBubbleForm",
      edit_mode: false,
      current_name: "",
      current_resource_link: "",
      current_details: "",
      current_uuid: "",
      current_website: "",
      current_website_img: "",
      treeData: {
        name: "Edit and save",
        resource_link: "uh",
        uuid: uuid.v4(),
        website_image: Add,
        children: []
      },

      activeIndex: 0
    };
  }
  componentDidMount() {
    var email = localStorage.getItem("email");
    if (email === "" || email === null || email === undefined) {
      this.props.history.push({
        pathname: "/login",
        state: { cameFrom: this.props.location.pathname }
      });
    }
  }

  findWebsiteImg = submitted_website => {
    if (submitted_website.toLowerCase().includes("acm")) {
      return acm;
    } else if (submitted_website.toLowerCase().includes("addthis")) {
      return addthis;
    } else if (submitted_website.toLowerCase().includes("adobe")) {
      return adobe;
    } else if (submitted_website.toLowerCase().includes("airbnb")) {
      return airbnb;
    } else if (submitted_website.toLowerCase().includes("amazonaws")) {
      return amazonaws;
    } else if (submitted_website.toLowerCase().includes("amazon")) {
      return amazon;
    } else if (submitted_website.toLowerCase().includes("americanexpress")) {
      return americanexpress;
    } else if (submitted_website.toLowerCase().includes("android")) {
      return android;
    } else if (submitted_website.toLowerCase().includes("angellist")) {
      return acm;
    } else if (submitted_website.toLowerCase().includes("angular")) {
      return angular;
    } else if (submitted_website.toLowerCase().includes("apple")) {
      return apple;
    } else if (submitted_website.toLowerCase().includes("applemusic")) {
      return applemusic;
    } else if (submitted_website.toLowerCase().includes("appveyor")) {
      return appveyor;
    } else if (submitted_website.toLowerCase().includes("archiveofourown")) {
      return archiveofourown;
    } else if (submitted_website.toLowerCase().includes("archlinux")) {
      return archlinux;
    } else if (submitted_website.toLowerCase().includes("artstation")) {
      return artstation;
    } else if (submitted_website.toLowerCase().includes("asana")) {
      return asana;
    } else if (submitted_website.toLowerCase().includes("atlassian")) {
      return atlassian;
    } else if (submitted_website.toLowerCase().includes("atom")) {
      return atom;
    } else if (submitted_website.toLowerCase().includes("aurelia")) {
      return aurelia;
    } else if (submitted_website.toLowerCase().includes("auth0")) {
      return auth0;
    } else if (submitted_website.toLowerCase().includes("automatic")) {
      return automatic;
    } else if (submitted_website.toLowerCase().includes("autotask")) {
      return autotask;
    } else if (submitted_website.toLowerCase().includes("aventrix")) {
      return aventrix;
    } else if (submitted_website.toLowerCase().includes("azuredevops")) {
      return azuredevops;
    } else if (submitted_website.toLowerCase().includes("baidu")) {
      return baidu;
    } else if (submitted_website.toLowerCase().includes("bandcamp")) {
      return bandcamp;
    } else if (submitted_website.toLowerCase().includes("basecamp")) {
      return basecamp;
    } else if (submitted_website.toLowerCase().includes("bathasu")) {
      return bathasu;
    } else if (submitted_website.toLowerCase().includes("beats")) {
      return beats;
    } else if (submitted_website.toLowerCase().includes("behance")) {
      return behance;
    } else if (submitted_website.toLowerCase().includes("bigcartel")) {
      return bigcartel;
    } else if (submitted_website.toLowerCase().includes("bing")) {
      return bing;
    } else if (submitted_website.toLowerCase().includes("bitbucket")) {
      return bitbucket;
    } else if (submitted_website.toLowerCase().includes("bitdefender")) {
      return bitdefender;
    } else if (submitted_website.toLowerCase().includes("bitly")) {
      return bitly;
    } else if (submitted_website.toLowerCase().includes("blender")) {
      return blender;
    } else if (submitted_website.toLowerCase().includes("java")) {
      return java;
    } else if (submitted_website.toLowerCase().includes("javascript")) {
      return javascript;
    } else if (submitted_website.toLowerCase().includes("boost")) {
      return boost;
    } else if (submitted_website.toLowerCase().includes("bootstrap")) {
      return bootstrap;
    } else if (submitted_website.toLowerCase().includes("bower")) {
      return bower;
    } else if (submitted_website.toLowerCase().includes("branddotai")) {
      return branddotai;
    } else if (submitted_website.toLowerCase().includes("buffer")) {
      return buffer;
    } else if (submitted_website.toLowerCase().includes("buzzfeed")) {
      return buzzfeed;
    } else if (submitted_website.toLowerCase().includes("cakephp")) {
      return cakephp;
    } else if (submitted_website.toLowerCase().includes("campaignmonitor")) {
      return campaignmonitor;
    } else if (submitted_website.toLowerCase().includes("cashapp")) {
      return cashapp;
    } else if (submitted_website.toLowerCase().includes("castorama")) {
      return castorama;
    } else if (submitted_website.toLowerCase().includes("castro")) {
      return castro;
    } else if (submitted_website.toLowerCase().includes("circleci")) {
      return circleci;
    } else if (submitted_website.toLowerCase().includes("clockify")) {
      return clockify;
    } else if (submitted_website.toLowerCase().includes("clojure")) {
      return clojure;
    } else if (submitted_website.toLowerCase().includes("cloudflare")) {
      return cloudflare;
    } else if (submitted_website.toLowerCase().includes("codacy")) {
      return codacy;
    } else if (submitted_website.toLowerCase().includes("codecademy")) {
      return codecademy;
    } else if (submitted_website.toLowerCase().includes("codecov")) {
      return codecov;
    } else if (submitted_website.toLowerCase().includes("codeforces")) {
      return codeforces;
    } else if (submitted_website.toLowerCase().includes("codeigniter")) {
      return codeigniter;
    } else if (submitted_website.toLowerCase().includes("codepen")) {
      return codepen;
    } else if (submitted_website.toLowerCase().includes("coderwall")) {
      return coderwall;
    } else if (submitted_website.toLowerCase().includes("codesandbox")) {
      return codesandbox;
    } else if (submitted_website.toLowerCase().includes("codeship")) {
      return codeship;
    } else if (submitted_website.toLowerCase().includes("codewars")) {
      return codewars;
    } else if (submitted_website.toLowerCase().includes("codio")) {
      return codio;
    } else if (submitted_website.toLowerCase().includes("coffeescript")) {
      return coffeescript;
    } else if (submitted_website.toLowerCase().includes("compropago")) {
      return compropago;
    } else if (submitted_website.toLowerCase().includes("condaforge")) {
      return condaforge;
    } else if (submitted_website.toLowerCase().includes("conekta")) {
      return conekta;
    } else if (submitted_website.toLowerCase().includes("coursera")) {
      return coursera;
    } else if (submitted_website.toLowerCase().includes("cplusplus")) {
      return cplusplus;
    } else if (submitted_website.toLowerCase().includes("css3")) {
      return css3;
    } else if (submitted_website.toLowerCase().includes("csswizardry")) {
      return csswizardry;
    } else if (submitted_website.toLowerCase().includes("d3js")) {
      return d3js;
    } else if (submitted_website.toLowerCase().includes("dailymotion")) {
      return dailymotion;
    } else if (submitted_website.toLowerCase().includes("dazn")) {
      return dazn;
    } else if (submitted_website.toLowerCase().includes("dblp")) {
      return dblp;
    } else if (submitted_website.toLowerCase().includes("debian")) {
      return debian;
    } else if (submitted_website.toLowerCase().includes("deezer")) {
      return deezer;
    } else if (submitted_website.toLowerCase().includes("dependabot")) {
      return dependabot;
    } else if (submitted_website.toLowerCase().includes("designernews")) {
      return designernews;
    } else if (submitted_website.toLowerCase().includes("devdotto")) {
      return devdotto;
    } else if (submitted_website.toLowerCase().includes("deviantart")) {
      return deviantart;
    } else if (submitted_website.toLowerCase().includes("devrant")) {
      return devrant;
    } else if (submitted_website.toLowerCase().includes("digg")) {
      return digg;
    } else if (submitted_website.toLowerCase().includes("digitalocean")) {
      return digitalocean;
    } else if (submitted_website.toLowerCase().includes("discord")) {
      return discord;
    } else if (submitted_website.toLowerCase().includes("django")) {
      return django;
    } else if (submitted_website.toLowerCase().includes("docker")) {
      return docker;
    } else if (submitted_website.toLowerCase().includes("dotnet")) {
      return dotnet;
    } else if (submitted_website.toLowerCase().includes("dropbox")) {
      return dropbox;
    } else if (submitted_website.toLowerCase().includes("drupal")) {
      return drupal;
    } else if (submitted_website.toLowerCase().includes("dtube")) {
      return dtube;
    } else if (submitted_website.toLowerCase().includes("ebay")) {
      return ebay;
    } else if (submitted_website.toLowerCase().includes("eclipseide")) {
      return eclipseide;
    } else if (submitted_website.toLowerCase().includes("elasticcloud")) {
      return elasticcloud;
    } else if (submitted_website.toLowerCase().includes("elasticsearch")) {
      return elasticsearch;
    } else if (submitted_website.toLowerCase().includes("elasticstack")) {
      return elasticstack;
    } else if (submitted_website.toLowerCase().includes("empirekred")) {
      return empirekred;
    } else if (submitted_website.toLowerCase().includes("envato")) {
      return envato;
    } else if (submitted_website.toLowerCase().includes("eslint")) {
      return eslint;
    } else if (submitted_website.toLowerCase().includes("ethereum")) {
      return ethereum;
    } else if (submitted_website.toLowerCase().includes("etsy")) {
      return etsy;
    } else if (submitted_website.toLowerCase().includes("eventbrite")) {
      return eventbrite;
    } else if (submitted_website.toLowerCase().includes("eventstore")) {
      return eventstore;
    } else if (submitted_website.toLowerCase().includes("evernote")) {
      return evernote;
    } else if (submitted_website.toLowerCase().includes("everplaces")) {
      return everplaces;
    } else if (submitted_website.toLowerCase().includes("expertsexchange")) {
      return expertsexchange;
    } else if (submitted_website.toLowerCase().includes("facebook")) {
      return facebook;
    } else if (submitted_website.toLowerCase().includes("fandango")) {
      return fandango;
    } else if (submitted_website.toLowerCase().includes("feedly")) {
      return feedly;
    } else if (submitted_website.toLowerCase().includes("firebase")) {
      return firebase;
    } else if (submitted_website.toLowerCase().includes("flickr")) {
      return flickr;
    } else if (submitted_website.toLowerCase().includes("freecodecamp")) {
      return freecodecamp;
    } else if (submitted_website.toLowerCase().includes("gatsby")) {
      return gatsby;
    } else if (submitted_website.toLowerCase().includes("github")) {
      return github;
    } else if (submitted_website.toLowerCase().includes("gitlab")) {
      return gitlab;
    } else if (submitted_website.toLowerCase().includes("glassdoor")) {
      return glassdoor;
    } else if (submitted_website.toLowerCase().includes("gmail")) {
      return gmail;
    } else if (submitted_website.toLowerCase().includes("goodreads")) {
      return goodreads;
    } else if (submitted_website.toLowerCase().includes("google")) {
      return google;
    } else if (submitted_website.toLowerCase().includes("graphql")) {
      return graphql;
    } else if (submitted_website.toLowerCase().includes("groupon")) {
      return groupon;
    } else if (submitted_website.toLowerCase().includes("hackerrank")) {
      return hackerrank;
    } else if (submitted_website.toLowerCase().includes("hackhands")) {
      return hackhands;
    } else if (submitted_website.toLowerCase().includes("hackster")) {
      return hackster;
    } else if (submitted_website.toLowerCase().includes("heroku")) {
      return heroku;
    } else if (submitted_website.toLowerCase().includes("hockeyapp")) {
      return hockeyapp;
    } else if (submitted_website.toLowerCase().includes("homify")) {
      return homify;
    } else if (submitted_website.toLowerCase().includes("hootsuite")) {
      return hootsuite;
    } else if (submitted_website.toLowerCase().includes("html5")) {
      return html5;
    } else if (submitted_website.toLowerCase().includes("huawei")) {
      return huawei;
    } else if (submitted_website.toLowerCase().includes("imdb")) {
      return imdb;
    } else if (submitted_website.toLowerCase().includes("inkscape")) {
      return inkscape;
    } else if (submitted_website.toLowerCase().includes("instagram")) {
      return instagram;
    } else if (submitted_website.toLowerCase().includes("intercom")) {
      return intercom;
    } else if (submitted_website.toLowerCase().includes("intel")) {
      return intel;
    } else if (submitted_website.toLowerCase().includes("internetexplorer")) {
      return internetexplorer;
    } else if (submitted_website.toLowerCase().includes("jsfiddle")) {
      return jsfiddle;
    } else if (submitted_website.toLowerCase().includes("jupyter")) {
      return jupyter;
    } else if (submitted_website.toLowerCase().includes("kaggle")) {
      return kaggle;
    } else if (submitted_website.toLowerCase().includes("khanacademy")) {
      return khanacademy;
    } else if (submitted_website.toLowerCase().includes("kickstarter")) {
      return kickstarter;
    } else if (submitted_website.toLowerCase().includes("leetcode")) {
      return leetcode;
    } else if (submitted_website.toLowerCase().includes("linkedin")) {
      return linkedin;
    } else if (submitted_website.toLowerCase().includes("mailchimp")) {
      return mailchimp;
    } else if (submitted_website.toLowerCase().includes("medium")) {
      return medium;
    } else if (submitted_website.toLowerCase().includes("meetup")) {
      return meetup;
    } else if (submitted_website.toLowerCase().includes("microsoft")) {
      return microsoft;
    } else if (submitted_website.toLowerCase().includes("mongodb")) {
      return mongodb;
    } else if (submitted_website.toLowerCase().includes("mozillafirefox")) {
      return mozillafirefox;
    } else if (submitted_website.toLowerCase().includes("mysql")) {
      return mysql;
    } else if (submitted_website.toLowerCase().includes("nintendo")) {
      return nintendo;
    } else if (submitted_website.toLowerCase().includes("nodedotjs")) {
      return nodedotjs;
    } else if (submitted_website.toLowerCase().includes("nodemon")) {
      return nodemon;
    } else if (submitted_website.toLowerCase().includes("npm")) {
      return npm;
    } else if (submitted_website.toLowerCase().includes("nvidia")) {
      return nvidia;
    } else if (submitted_website.toLowerCase().includes("oculus")) {
      return oculus;
    } else if (submitted_website.toLowerCase().includes("patreon")) {
      return patreon;
    } else if (submitted_website.toLowerCase().includes("pinterest")) {
      return pinterest;
    } else if (submitted_website.toLowerCase().includes("postgresql")) {
      return postgresql;
    } else if (submitted_website.toLowerCase().includes("python")) {
      return python;
    } else if (submitted_website.toLowerCase().includes("quora")) {
      return quora;
    } else if (submitted_website.toLowerCase().includes("raspberrypi")) {
      return raspberrypi;
    } else if (submitted_website.toLowerCase().includes("react")) {
      return react;
    } else if (submitted_website.toLowerCase().includes("reddit")) {
      return reddit;
    } else if (submitted_website.toLowerCase().includes("redux")) {
      return redux;
    } else if (submitted_website.toLowerCase().includes("safari")) {
      return safari;
    } else if (submitted_website.toLowerCase().includes("salesforce")) {
      return salesforce;
    } else if (submitted_website.toLowerCase().includes("samsung")) {
      return samsung;
    } else if (submitted_website.toLowerCase().includes("scribd")) {
      return scribd;
    } else if (submitted_website.toLowerCase().includes("shopify")) {
      return shopify;
    } else if (submitted_website.toLowerCase().includes("snapchat")) {
      return snapchat;
    } else if (submitted_website.toLowerCase().includes("soundcloud")) {
      return soundcloud;
    } else if (submitted_website.toLowerCase().includes("stackexchange")) {
      return stackexchange;
    } else if (submitted_website.toLowerCase().includes("stackoverflow")) {
      return stackoverflow;
    } else if (submitted_website.toLowerCase().includes("stripe")) {
      return stripe;
    } else if (submitted_website.toLowerCase().includes("sublimetext")) {
      return sublimetext;
    } else if (submitted_website.toLowerCase().includes("swift")) {
      return swift;
    } else if (submitted_website.toLowerCase().includes("teespring")) {
      return teespring;
    } else if (submitted_website.toLowerCase().includes("tencentqq")) {
      return tencentqq;
    } else if (submitted_website.toLowerCase().includes("tinder")) {
      return tinder;
    } else if (submitted_website.toLowerCase().includes("topcoder")) {
      return topcoder;
    } else if (submitted_website.toLowerCase().includes("treehouse")) {
      return treehouse;
    } else if (submitted_website.toLowerCase().includes("tripadvisor")) {
      return tripadvisor;
    } else if (submitted_website.toLowerCase().includes("tumblr")) {
      return tumblr;
    } else if (submitted_website.toLowerCase().includes("twitch")) {
      return twitch;
    } else if (submitted_website.toLowerCase().includes("twitter")) {
      return twitter;
    } else if (submitted_website.toLowerCase().includes("ubuntu")) {
      return ubuntu;
    } else if (submitted_website.toLowerCase().includes("uber")) {
      return uber;
    } else if (submitted_website.toLowerCase().includes("udacity")) {
      return udacity;
    } else if (submitted_website.toLowerCase().includes("udemy")) {
      return udemy;
    } else if (submitted_website.toLowerCase().includes("upwork")) {
      return upwork;
    } else if (submitted_website.toLowerCase().includes("visualstudiocode")) {
      return visualstudiocode;
    } else if (submitted_website.toLowerCase().includes("webpack")) {
      return webpack;
    } else if (submitted_website.toLowerCase().includes("whatsapp")) {
      return whatsapp;
    } else if (submitted_website.toLowerCase().includes("wikipedia")) {
      return wikipedia;
    } else if (submitted_website.toLowerCase().includes("wolfram")) {
      return wolfram;
    } else if (submitted_website.toLowerCase().includes("youtube")) {
      return youtube;
    } else if (submitted_website.toLowerCase().includes("zillow")) {
      return zillow;
    } else if (submitted_website.toLowerCase().includes("zendesk")) {
      return zendesk;
    } else return circle;
  };
  handleExtraInfoSubmit = input => {
    this.setState({ current_extra_info: input });
    this.findUUIDthenUpdateExtra(
      this.state.treeData,
      this.state.current_uuid,
      input
    );
  };

  handleAccordianClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleEditSwitchForm = () => {
    this.setState({ current_extra_info: "" });
  };
  switchToBubbleForm = () => {
    this.setState({ showForm: "showBubbleForm" });
  };

  findUUIDthenAppendChildren = () => {
    //we want to find the UUID and then append the following
    /*children: [
      {
        name: "Edit and save",
        resource_link: "uh",
        uuid: uuid.v4(),
        details: "hi",
        website_image:
          "https://cdn3.iconfinder.com/data/icons/harmonicons-06/64/plus-circle-512.png"
      }
    ];*/
  };
  handleSubmit = a => {
    if (this.state.treeData.children == "") {
      var submitted_uuid = a.uuid;
      var submitted_title = a.title;
      var submitted_resource_link = a.resource_link;
      var submitted_details = a.details;
      var submitted_website = a.website;

      var submitted_website_img = this.findWebsiteImg(submitted_resource_link);

      var newTreeData = {
        name: submitted_title,
        resource_link: submitted_resource_link,
        details: submitted_details,
        uuid: submitted_uuid,
        website_image: submitted_website_img
      };

      this.setState({ treeData: newTreeData });

      this.setState({ showForm: "showBubbleInfo" });
      this.setState({ current_name: a.title });
      this.setState({ current_resource_link: a.resource_link });
      this.setState({ current_details: a.details });
    } else {
      this.setState({ showForm: "showBubbleInfo" });

      this.setState({ current_name: a.title });
      this.setState({ current_resource_link: a.resource_link });
      this.setState({ current_details: a.details });

      var submitted_website_img = this.findWebsiteImg(a.resource_link);
      this.setState({ current_website_img: submitted_website_img });

      this.findUUID(
        this.state.treeData,
        this.state.current_uuid,
        a.title,
        a.resource_link,
        a.details,
        submitted_website_img
      );
    }

    var that = this;
  };

  handleButtonToggle2 = d => {
    if (d.data.name !== "Edit and save") {
      this.setState({ showForm: "showBubbleInfo" });
      this.setState({ current_uuid: d.data.uuid });
      this.setState({
        current_name: d.data.name,
        current_resource_link: d.data.resource_link,
        current_uuid: d.data.uuid,
        current_details: d.data.details
      });
    } else {
      this.setState({ showForm: "showBubbleForm" });
      this.setState({ current_uuid: d.data.uuid });
      this.setState({
        current_name: d.data.name,
        current_resource_link: d.data.resource_link,
        current_uuid: d.data.uuid,
        current_details: d.data.details
      });
    }
  };
  handleDeleteClick = d => {
    //find UUID and then delete children
    this.setState({ current_uuid: d.data.uuid });

    this.findUUIDthenDelete(this.state.treeData, this.state.current_uuid);
  };

  handleAppendClick = d => {
    this.setState({ current_uuid: d.parent.data.uuid });
    this.findUUIDthenAppend(this.state.treeData, this.state.current_uuid);
  };

  handleAppendClickHorizontal = d => {
    this.setState({ current_uuid: d.data.uuid });
    this.findUUIDthenAppendHorizontal(this.state.treeData, d.data.uuid);
  };

  switchToExtraInfoForm = d => {
    this.setState({ showForm: "showExtraInfoForm" });
    this.setState({ current_uuid: d.data.uuid });
    this.findIfThereIsExtraInfo(this.state.treeData, d.data.uuid);
  };

  findUUIDthenDelete = (tree, uuid) => {
    if (!tree.children) return;
    tree.children = tree.children.filter(c => c.uuid !== uuid);
    tree.children.forEach(c => this.findUUIDthenDelete(c, uuid));
    this.setState({ treeData: tree });
  };

  findUUIDthenAppendHorizontal = (targetObject, id) => {
    var targetIsFound = false;
    var target = "";
    if (targetObject.uuid == id) {
      targetIsFound = true;
      target = targetObject;
    }
    if (targetIsFound == false) {
      if (targetObject.children === undefined) {
      } else {
        targetObject.children.map(x =>
          this.findUUIDthenAppendHorizontal(x, id)
        );
      }
    }
    if (targetIsFound == true) {
      target.children = [
        {
          name: "Edit and save",
          resource_link: "uh",
          uuid: uuid.v4(),
          details: "hi",
          website_image: Add,
          extra_info: ""
        }
      ];
      this.setState({ treeData: this.state.treeData });
    }
  };

  findUUIDthenUpdateExtra = (targetObject, id, input) => {
    var targetIsFound = false;
    var target = "";
    if (targetObject.uuid == id) {
      targetIsFound = true;
      target = targetObject;
    }
    if (targetIsFound == false) {
      if (targetObject.children === undefined) {
      } else {
        targetObject.children.map(x =>
          this.findUUIDthenUpdateExtra(x, id, input)
        );
      }
    }
    if (targetIsFound == true) {
      target.extra_info = input;
    }
  };

  findUUIDthenAppend = (targetObject, uuid3) => {
    var targetIsFound = false;
    var target = "";
    if (targetObject.uuid == uuid3) {
      targetIsFound = true;
      target = targetObject;
    }
    if (targetIsFound == false) {
      if (targetObject.children === undefined) {
      } else {
        targetObject.children.map(x => this.findUUIDthenAppend(x, uuid3));
      }
    }
    if (targetIsFound == true) {
      if (typeof target.children != undefined) {
        target.children.unshift({
          name: "Edit and save",
          resource_link: "uh",
          uuid: uuid.v4(),
          details: "hi",
          website_image: Add,
          extra_info: ""
        });
      }

      this.setState({ treeData: this.state.treeData });
    }
  };

  findIfThereIsExtraInfo = (targetObject, to_find_uuid) => {
    var targetIsFound = false;
    var target = "";
    if (targetObject.uuid == to_find_uuid) {
      targetIsFound = true;
      target = targetObject;
    }
    if (targetIsFound == false) {
      if (targetObject.children === undefined) {
      } else {
        targetObject.children.map(x =>
          this.findIfThereIsExtraInfo(x, to_find_uuid)
        );
      }
    } else if ((targetIsFound = true)) {
      this.setState({ current_extra_info: target.extra_info });
    }
  };
  findUUID = (
    targetObject,
    uuid2,
    submitname,
    submitted_resource_link,
    submitdetails,
    submitted_website_img
  ) => {
    var targetIsFound = false;
    var target = "";

    if (targetObject.uuid == uuid2) {
      targetIsFound = true;
      target = targetObject;
    }

    if (targetIsFound == false) {
      if (targetObject.children === undefined) {
      } else {
        targetObject.children.map(x =>
          this.findUUID(
            x,
            uuid2,
            submitname,
            submitted_resource_link,
            submitdetails,
            submitted_website_img
          )
        );
      }
    } else {
      if (target.children === undefined) {
        target.name = submitname;
        target.resource_link = submitted_resource_link;
        target.details = submitdetails;
        target.website_image = submitted_website_img;
      } else if (typeof target.children !== undefined) {
        target.name = submitname;
        target.resource_link = submitted_resource_link;
        target.details = submitdetails;
        target.website_image = submitted_website_img;
      }
    }
  };

  async saveRoadmap() {
    var toSaveData = this.state.treeData;
    var toPush = {
      roadmap: [this.state.treeData],
      name: this.state.name,
      category: this.state.category,
      time_completion: this.state.time_completion,
      roadmap_debrief: this.state.roadmap_debrief
    };

    var requestBody = {
      author_id: this.props.auth.user.id,
      author_name: this.props.auth.user.name,
      author_profile_pic: this.props.auth.user_profile_pic,
      author_bio_text: this.props.auth.user_profile_bio,
      roadmap: toPush
    };
    await this.props.addRoadmap(requestBody);
    this.props.history.push("/home");
  }
  validate = () => {
    var category = this.state.category;
    var roadmap_title = this.state.name;
    var time_completion = this.state.time_completion;
    var roadmap_debrief = this.state.roadmap_debrief;
    var regex = /^[a-zA-Z]+$/;
    if (
      category !== "" &&
      roadmap_title !== "" &&
      time_completion !== "" &&
      roadmap_debrief !== ""
    ) {
      if (time_completion === "none" || !isNaN(time_completion)) {
        this.saveRoadmap();
      } else {
        this.setState({ isThereError: true });
      }
    } else {
      this.setState({ isThereError: true });
    }
  };

  nameOnChange = event => {
    this.setState({ name: event.target.value });
  };

  categoryOnChange = event => {
    this.setState({ category: event.target.value });
  };

  authordescriptionOnChange = event => {
    this.setState({ author_description: event.target.value });
  };

  debriefOnChange = event => {
    this.setState({ roadmap_debrief: event.target.value });
  };

  timeOnChange = event => {
    this.setState({ time_completion: event.target.value });
  };

  render() {
    return (
      <div className="RoadmapAdderHeader">
        <div>
          <span className="RoadmapAdderText">Create a new roadmap!</span>
          <Button onClick={this.validate} className="RoadmapAddButton">
            SAVE THE ENTIRE ROADMAP
          </Button>
        </div>
        <tr />
        <div className="RoadmapFrom" style={{ marginTop: "3rem" }}>
          {this.state.isThereError ? (
            <div>
              <a
                style={{
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "500"
                }}
              >
                Error Saving the map, did you put in a title, category, and
                debrief, btw, type in none for time if not applicable.
              </a>
            </div>
          ) : (
            <div />
          )}
          <Form className="RoadmapAdderForm">
            <Form.Group widths="equal">
              <Form.Field>
                <label>Title</label>
                <Input
                  id="form-input-control-first-name"
                  placeholder="What's the title? :)"
                  onChange={this.nameOnChange}
                  maxLength="100"
                />
              </Form.Field>
              <Form.Field
                placeholder="Choose a category!"
                onChange={this.categoryOnChange}
              >
                <label>Category</label>
                <Input
                  id="form-input-control-last-name"
                  placeholder="Choose a category!"
                  onChange={this.categoryOnChange}
                  maxLength="50"
                />
              </Form.Field>

              <Form.Field>
                <label>Time to Complete (hrs)</label>
                <Input
                  id="form-input-control-last-name"
                  placeholder="Type in none if not applicable :-)"
                  onChange={this.timeOnChange}
                  maxLength="5"
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                style={{ minHeight: 50, maxHeight: 50 }}
                id="form-textarea-control-about-you"
                control={TextArea}
                label="Roadmap Debrief:"
                placeholder="Give a sweet and brief description for your Roadmap!"
                maxlength="200"
                onChange={this.debriefOnChange}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="InstructionsDiv">
          <span className="RoadmapAdderText">Construct the roadmap!</span>
          <hr />
          <span className="Instructions_text"> Instructions</span>
          <AccordionExampleStandard />
        </div>
        <MediaQuery minWidth={766}>
          <ul>
            <li className="SVGContainer">
              <div>
                <TreeDisplayAdd
                  roadmapData={this.state.treeData}
                  handleChange={this.handleButtonToggle}
                  handleChange2={this.handleButtonToggle2}
                  handleDeleteClick={this.handleDeleteClick}
                  handleAppendClick={this.handleAppendClick}
                  handleAppendClickHorizontal={this.handleAppendClickHorizontal}
                  switchToExtraInfoForm={this.switchToExtraInfoForm}
                />
              </div>
            </li>

            <li>
              <div>
                <TreeSidebarAdd
                  parentHandleSubmit={this.handleSubmit}
                  showForm={this.state.showForm}
                  sidebarDataName={this.state.current_name}
                  sidebarDataImg={this.state.current_resource_link}
                  sidebarDataDetails={this.state.current_details}
                  saveRoadmap={this.saveRoadmap}
                  handleExtraInfoSubmit={this.handleExtraInfoSubmit}
                  current_extra_info={this.state.current_extra_info}
                  handleEditSwitchForm={this.handleEditSwitchForm}
                  switchToBubbleForm={this.switchToBubbleForm}
                />
              </div>
            </li>
          </ul>
        </MediaQuery>
        <MediaQuery maxWidth={765}>
          <li className="SVGContainer">
            <div>
              <TreeDisplayAdd
                roadmapData={this.state.treeData}
                handleChange={this.handleButtonToggle}
                handleChange2={this.handleButtonToggle2}
                handleDeleteClick={this.handleDeleteClick}
                handleAppendClick={this.handleAppendClick}
                handleAppendClickHorizontal={this.handleAppendClickHorizontal}
                switchToExtraInfoForm={this.switchToExtraInfoForm}
              />
            </div>
          </li>
          <div>
            <TreeSidebarAdd
              parentHandleSubmit={this.handleSubmit}
              showForm={this.state.showForm}
              sidebarDataName={this.state.current_name}
              sidebarDataImg={this.state.current_resource_link}
              sidebarDataDetails={this.state.current_details}
              saveRoadmap={this.saveRoadmap}
              handleExtraInfoSubmit={this.handleExtraInfoSubmit}
              current_extra_info={this.state.current_extra_info}
              handleEditSwitchForm={this.handleEditSwitchForm}
              switchToBubbleForm={this.switchToBubbleForm}
            />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  roadmap: state.roadmap,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addRoadmap }
)(RoadmapAdder);
