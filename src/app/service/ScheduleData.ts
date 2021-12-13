import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]=[
  {id:1,PlayingDate:new Date(2021,8,10),HomeTeam:'Persiwang',AwayTeam:'Persipon',
  HomeScore:3,AwayScore:2,RefName:'Simic',Notes:'Overtime'},
  {id:2,PlayingDate:new Date(2021,8,10),HomeTeam:'EVOS',AwayTeam:'ONIC',
  HomeScore:3,AwayScore:2,RefName:'KB',Notes:'Overtime'},
  {id:3,PlayingDate:new Date(2021,8,10),HomeTeam:'Onic',AwayTeam:'ONIC PH',
  HomeScore:3,AwayScore:2,RefName:'PULUNG',Notes:'Overkill'},
  {id:4,PlayingDate:new Date(2021,8,10),HomeTeam:'RRQ',AwayTeam:'TODAK',
  HomeScore:3,AwayScore:2,RefName:'Kornet',Notes:'Overtime'},
  {id:5,PlayingDate:new Date(2021,8,10),HomeTeam:'BTR',AwayTeam:'AE',
  HomeScore:3,AwayScore:2,RefName:'Clara',Notes:'Overtime'},
  {id:6,PlayingDate:new Date(2021,8,10),HomeTeam:'BDL',AwayTeam:'EVOS SG',
  HomeScore:3,AwayScore:2,RefName:'Om Wawa',Notes:'Overtime'},
  {id:7,PlayingDate:new Date(2021,8,10),HomeTeam:'BLCK',AwayTeam:'RSG SG',
  HomeScore:3,AwayScore:2,RefName:'GIO',Notes:'Overtime'},
]
export const Teams:Team[]=[
  {id:1,name:'Persiwang',type:'Klub lokal'},
  {id:2,name:'EVOS',type:'Klub lokal'},
  {id:3,name:'ONIC',type:'Klub lokal'},
  {id:4,name:'RRQ',type:'Klub lokal'},
  {id:5,name:'BTR',type:'Klub lokal'},
  {id:6,name:'BDL',type:'Klub internasional'},
  {id:7,name:'BLCK',type:'Klub internasional'},
]