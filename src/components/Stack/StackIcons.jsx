import React from "react";
import ApolloIcon from "../../assets/icons/ApolloIcon";
import YarnIcon from "../../assets/icons/YarnIcon";
import VSCodeIcon from "../../assets/icons/VSCodeIcon";
import VercelIcon from "../../assets/icons/VercelIcon";
import TypescriptIcon from "../../assets/icons/TypescriptIcon";
import TailwindIcon from "../../assets/icons/TailwindIcon";
import StrapiIcon from "../../assets/icons/StrapiIcon";
import RedisIcon from "../../assets/icons/RedisIcon";
import ReactRouterDomIcon from "../../assets/icons/ReactRouterDomIcon";
import ReactQueryIcon from "../../assets/icons/ReactQueryIcon";
import ReactJSIcon from "../../assets/icons/ReactJSIcon";
import RabbitMQIcon from "../../assets/icons/RabbitMQIcon";
import PrettierIcon from "../../assets/icons/PrettierIcon";
import PostmanIcon from "../../assets/icons/PostmanIcon";
import PostgreSQLIcon from "../../assets/icons/PostgreSQLIcon";
import PlaywrightIcon from "../../assets/icons/PlaywrightIcon";
import NPMIcon from "../../assets/icons/NPMIcon";
import NodeJSIcon from "../../assets/icons/NodeJSIcon";
import NextJSIcon from "../../assets/icons/NextJSIcon";
import MySQLIcon from "../../assets/icons/MySQLIcon";
import MUIIcon from "../../assets/icons/MUIIcon";
import MongoDBIcon from "../../assets/icons/MongoDBIcon";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import KubernetesIcon from "../../assets/icons/KubernetesIcon";
import KafkaIcon from "../../assets/icons/KafkaIcon";
import JSIcon from "../../assets/icons/JSIcon";
import JestIcon from "../../assets/icons/JestIcon";
import GraphqlIcon from "../../assets/icons/GraphqlIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import FirebaseIcon from "../../assets/icons/FirebaseIcon";
import ES6Icon from "../../assets/icons/ES6Icon";
import DockerIcon from "../../assets/icons/DockerIcon";
import CypressIcon from "../../assets/icons/CypressIcon";
import CssIcon from "../../assets/icons/CssIcon";
import BabelIcon from "../../assets/icons/BabelIcon";
import AxiosIcon from "../../assets/icons/AxiosIcon";
const StackIcons = ({ stack, hideLabel = false }) => {
  const iconForStack = {
    apollo: <ApolloIcon />,
    yarn: <YarnIcon />,
    vscode: <VSCodeIcon />,
    vercel: <VercelIcon />,
    typescript: <TypescriptIcon />,
    tailwind: <TailwindIcon />,
    strapi: <StrapiIcon />,
    redis: <RedisIcon />,
    reactrouter: <ReactRouterDomIcon />,
    reactquery: <ReactQueryIcon />,
    react: <ReactJSIcon />,
    rabbitmq: <RabbitMQIcon />,
    prettier: <PrettierIcon />,
    postman: <PostmanIcon />,
    postgres: <PostgreSQLIcon />,
    playwright: <PlaywrightIcon />,
    npm: <NPMIcon />,
    nodejs: <NodeJSIcon />,
    nextjs: <NextJSIcon />,
    mysql: <MySQLIcon />,
    mui: <MUIIcon />,
    mongodb: <MongoDBIcon />,
    linkedin: <LinkedinIcon />,
    kubernetes: <KubernetesIcon />,
    kafka: <KafkaIcon />,
    js: <JSIcon />,
    jest: <JestIcon />,
    graphql: <GraphqlIcon />,
    github: <GithubIcon />,
    firebase: <FirebaseIcon />,
    essix: <ES6Icon />,
    docker: <DockerIcon />,
    cypress: <CypressIcon />,
    css: <CssIcon />,
    babel: <BabelIcon />,
    axios: <AxiosIcon />,
  };
  return stack?.map((s, i) =>
    iconForStack?.[s] ? (
      <div className="stack__tooltip" key={`${s}${i}`}>
        {iconForStack?.[s]}
        {!hideLabel && <span className="stack__tooltip--text">{s}</span>}
      </div>
    ) : null
  );
};

export default StackIcons;
