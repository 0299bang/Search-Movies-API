import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

const { APIKEY } = process.env;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { title, page, id } = JSON.parse(request.body as string);
  const url = id
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();
  response.status(200).json(json);
}

// f2ba9a1
// const url = id ? '' : ''
// 삼항연산자
// 요청 정보에 id값이 있으면
// 영화의 상세정보를 요청하는 개념으로 주소를 만들고
// 그렇지 않으면
// 일반적인 영화 목록을 요청하는 주소로

// 중요
// 서버리스 함수가 동작하는 환경은 브라우저가 아니고 버셀 패키지가 동작하는 'node js 환경'이다
// node js에는 fetch가 없다
// const res = await fetch(url)
// fetch함수를 그대로 사용할 수 있는 node js의 패키지가 있다
// 노드 패치 / npm i node-fetch@2

// 서버리스 함수(Serverless Functions)란,
// 컴퓨팅 서버를 직접 구축이나 관리하지 않고도
// 그 기능을 함수 단위로 작성해서 바로 사용할 수 있는 하나의 기능이자 서비스

// 환경변수
// 프로젝트가 동작하는 환경 자체에다가 변수를 만들어서 데이터를 담아놓고
// 그 환경에서만 데이터를 활용할수 있는 방법
// 패키지 설치
// npm i -D dotenv
// .env(닷env) apikey
// .gitignore에 .env 넣기
// 그 환경이 아닌 다른 곳에서는 확인할수 없도록 만들어야 한다

// vercel에서 settings/Environment Variables/ APIKEY ***
