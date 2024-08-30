import {FunctionComponent, useState, useEffect, useRef} from 'react'
// import {useNavigate} from "react-router-dom";
import store, {} from "../../redux/reduxStore";
import {Button, InputNumber, Checkbox} from 'antd';
import type {GetProp} from 'antd';
import {getInfo2} from "../../http/api";
import "./index.scss"
import {ethers} from "ethers";
import LockContract from "../../abi/Lock.json"

interface Props {
    title: string;
}

// interface State {
// count: number;
// }

const HomeComponent: FunctionComponent<Props> = ({title}) => {
    title = title || "Home"
    // const navigate = useNavigate()
    const [signer, setSigner] = useState<any>(); //获取store.signer作为默认值
    const matches: any = {
        "dataFrom": "",
        "emptyFlag": false,
        "errorCode": "0",
        "errorMessage": "处理成功",
        "success": true,
        "value": {
            "vtoolsConfig": {
                "offLineSaleStatus": 1,
                "offLineStopMessage": "抱歉，本彩种已停止销售",
                "onLineSaleStatus": 1,
                "onLineStopMessage": "抱歉，本彩种已停止销售"
            },
            "matchInfoList": [
                {
                    "businessDate": "2024-08-13",
                    "subMatchList": [
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "BAA",
                            "awayTeamAbbName": "迪拜国青",
                            "awayTeamAllName": "迪拜国民青年",
                            "awayTeamCode": "BAA",
                            "awayTeamId": 2724,
                            "backColor": "336600",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "1.70",
                                "af": "0",
                                "d": "3.60",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "3.80",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:52:24"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "3.05",
                                "af": "0",
                                "d": "3.75",
                                "df": "0",
                                "goalLine": "+1",
                                "goalLineValue": "+1.00",
                                "h": "1.87",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:52:33"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "ARF",
                            "homeTeamAbbName": "赖扬加拉",
                            "homeTeamAllName": "赖扬加拉法",
                            "homeTeamCode": "ARF",
                            "homeTeamId": 1352,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "亚冠",
                            "leagueAllName": "亚洲冠军联赛",
                            "leagueCode": "ACL",
                            "leagueId": 1,
                            "lineNum": "",
                            "matchDate": "2024-08-13",
                            "matchId": 1026499,
                            "matchName": "",
                            "matchNum": 2002,
                            "matchNumDate": "",
                            "matchNumStr": "周二002",
                            "matchStatus": "Selling",
                            "matchTime": "23:30:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "3.050",
                                    "d": "3.750",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.870",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122358,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:52:33"
                                },
                                {
                                    "a": "1.700",
                                    "d": "3.600",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "3.800",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122358,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:52:24"
                                },
                                {
                                    "a": "3.050",
                                    "d": "3.750",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.870",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122318,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:52:33"
                                },
                                {
                                    "a": "1.700",
                                    "d": "3.600",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "3.800",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122318,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:52:24"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122358,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122318,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "SAL",
                            "awayTeamAbbName": "萨尔茨堡",
                            "awayTeamAllName": "萨尔茨堡",
                            "awayTeamCode": "SAL",
                            "awayTeamId": 335,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.22",
                                "af": "0",
                                "d": "3.50",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "2.55",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:16:21"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.37",
                                "af": "0",
                                "d": "4.55",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "5.55",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:16:28"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "FCT",
                            "homeTeamAbbName": "特温特",
                            "homeTeamAllName": "特温特",
                            "homeTeamCode": "FCT",
                            "homeTeamId": 254,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026500,
                            "matchName": "",
                            "matchNum": 2003,
                            "matchNumDate": "",
                            "matchNumStr": "周二003",
                            "matchStatus": "Selling",
                            "matchTime": "01:00:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.370",
                                    "d": "4.550",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "5.550",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122292,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:16:28"
                                },
                                {
                                    "a": "2.220",
                                    "d": "3.500",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.550",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122292,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:16:21"
                                },
                                {
                                    "a": "1.370",
                                    "d": "4.550",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "5.550",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122303,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:16:28"
                                },
                                {
                                    "a": "2.220",
                                    "d": "3.500",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.550",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122303,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:16:21"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122292,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122303,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "LIL",
                            "awayTeamAbbName": "里尔",
                            "awayTeamAllName": "里尔",
                            "awayTeamCode": "LIL",
                            "awayTeamId": 180,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "4.15",
                                "af": "0",
                                "d": "3.70",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "1.62",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:14:00"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.97",
                                "af": "0",
                                "d": "3.30",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "3.15",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:14:08"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "FEN",
                            "homeTeamAbbName": "费内巴切",
                            "homeTeamAllName": "费内巴切",
                            "homeTeamCode": "FEN",
                            "homeTeamId": 311,
                            "isHide": 0,
                            "isHot": 1,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026501,
                            "matchName": "",
                            "matchNum": 2004,
                            "matchNumDate": "",
                            "matchNumStr": "周二004",
                            "matchStatus": "Selling",
                            "matchTime": "01:00:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.970",
                                    "d": "3.300",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "3.150",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122309,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:14:08"
                                },
                                {
                                    "a": "4.150",
                                    "d": "3.700",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.620",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122309,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:14:00"
                                },
                                {
                                    "a": "1.970",
                                    "d": "3.300",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "3.150",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122310,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:14:08"
                                },
                                {
                                    "a": "4.150",
                                    "d": "3.700",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.620",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122310,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:14:00"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122309,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122310,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "JAB",
                            "awayTeamAbbName": "比亚韦",
                            "awayTeamAllName": "比亚韦斯托克",
                            "awayTeamCode": "JAB",
                            "awayTeamId": 2206,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "6.85",
                                "af": "0",
                                "d": "4.95",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "1.28",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:19:22"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "2.97",
                                "af": "0",
                                "d": "3.60",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "1.94",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:19:32"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "BOD",
                            "homeTeamAbbName": "博德闪耀",
                            "homeTeamAllName": "博德闪耀",
                            "homeTeamCode": "BOD",
                            "homeTeamId": 618,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026502,
                            "matchName": "",
                            "matchNum": 2005,
                            "matchNumDate": "",
                            "matchNumStr": "周二005",
                            "matchStatus": "Selling",
                            "matchTime": "01:00:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "2.970",
                                    "d": "3.600",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "1.940",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122297,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:19:32"
                                },
                                {
                                    "a": "6.850",
                                    "d": "4.950",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.280",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122297,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:19:22"
                                },
                                {
                                    "a": "2.970",
                                    "d": "3.600",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "1.940",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122295,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:19:32"
                                },
                                {
                                    "a": "6.850",
                                    "d": "4.950",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.280",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122295,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:19:22"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122297,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122295,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "MAM",
                            "awayTeamAbbName": "马尔默",
                            "awayTeamAllName": "马尔默",
                            "awayTeamCode": "MAM",
                            "awayTeamId": 606,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "3.55",
                                "af": "0",
                                "d": "3.50",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "1.78",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:45"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.82",
                                "af": "0",
                                "d": "3.45",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "3.45",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "19:36:56"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "PAO",
                            "homeTeamAbbName": "塞萨洛",
                            "homeTeamAllName": "塞萨洛尼基",
                            "homeTeamCode": "PAO",
                            "homeTeamId": 333,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026503,
                            "matchName": "",
                            "matchNum": 2006,
                            "matchNumDate": "",
                            "matchNumStr": "周二006",
                            "matchStatus": "Selling",
                            "matchTime": "01:30:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.820",
                                    "d": "3.450",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "3.450",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122327,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "19:36:56"
                                },
                                {
                                    "a": "3.550",
                                    "d": "3.500",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.780",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122327,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                },
                                {
                                    "a": "1.820",
                                    "d": "3.450",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "3.450",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122356,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "19:36:56"
                                },
                                {
                                    "a": "3.550",
                                    "d": "3.500",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.780",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122356,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122327,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122356,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "MTJ",
                            "awayTeamAbbName": "中日德兰",
                            "awayTeamAllName": "中日德兰",
                            "awayTeamCode": "MTJ",
                            "awayTeamId": 709,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "3.40",
                                "af": "0",
                                "d": "3.57",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "1.80",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:10:05"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.76",
                                "af": "0",
                                "d": "3.60",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "3.55",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:10:13"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "FES",
                            "homeTeamAbbName": "费伦茨",
                            "homeTeamAllName": "费伦茨瓦罗斯",
                            "homeTeamCode": "FES",
                            "homeTeamId": 295,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026504,
                            "matchName": "",
                            "matchNum": 2007,
                            "matchNumDate": "",
                            "matchNumStr": "周二007",
                            "matchStatus": "Selling",
                            "matchTime": "02:00:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.760",
                                    "d": "3.600",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "3.550",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122322,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:10:13"
                                },
                                {
                                    "a": "3.400",
                                    "d": "3.570",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.800",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122322,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:10:05"
                                },
                                {
                                    "a": "1.760",
                                    "d": "3.600",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "3.550",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122350,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:10:13"
                                },
                                {
                                    "a": "3.400",
                                    "d": "3.570",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.800",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122350,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:10:05"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122322,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122350,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "SLA",
                            "awayTeamAbbName": "斯拉维亚",
                            "awayTeamAllName": "布拉格斯拉维亚",
                            "awayTeamCode": "SLA",
                            "awayTeamId": 336,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.88",
                                "af": "0",
                                "d": "3.40",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "2.05",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:15:00"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.57",
                                "af": "0",
                                "d": "3.85",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "4.30",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "20:15:22"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "USG",
                            "homeTeamAbbName": "圣吉联合",
                            "homeTeamAllName": "圣吉尔联合",
                            "homeTeamCode": "USG",
                            "homeTeamId": 2484,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026505,
                            "matchName": "",
                            "matchNum": 2008,
                            "matchNumDate": "",
                            "matchNumStr": "周二008",
                            "matchStatus": "Selling",
                            "matchTime": "02:30:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.570",
                                    "d": "3.850",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "4.300",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122313,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:15:22"
                                },
                                {
                                    "a": "2.880",
                                    "d": "3.400",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.050",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122313,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:15:00"
                                },
                                {
                                    "a": "1.570",
                                    "d": "3.850",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "4.300",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122344,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:15:22"
                                },
                                {
                                    "a": "2.880",
                                    "d": "3.400",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.050",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122344,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "20:15:00"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122313,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122344,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "SPP",
                            "awayTeamAbbName": "布斯巴达",
                            "awayTeamAllName": "布拉格斯巴达",
                            "awayTeamCode": "SPP",
                            "awayTeamId": 291,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.09",
                                "af": "0",
                                "d": "3.15",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "3.00",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:45"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "4.40",
                                "af": "0",
                                "d": "3.72",
                                "df": "0",
                                "goalLine": "+1",
                                "goalLineValue": "+1.00",
                                "h": "1.58",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:46"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "STE",
                            "homeTeamAbbName": "布星",
                            "homeTeamAllName": "布加勒斯特星",
                            "homeTeamCode": "STE",
                            "homeTeamId": 337,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026520,
                            "matchName": "",
                            "matchNum": 2009,
                            "matchNumDate": "",
                            "matchNumStr": "周二009",
                            "matchStatus": "Selling",
                            "matchTime": "02:30:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "4.400",
                                    "d": "3.720",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.580",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122354,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:46"
                                },
                                {
                                    "a": "2.090",
                                    "d": "3.150",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "3.000",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122354,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                },
                                {
                                    "a": "4.400",
                                    "d": "3.720",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.580",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122328,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:46"
                                },
                                {
                                    "a": "2.090",
                                    "d": "3.150",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "3.000",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122328,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122354,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122328,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "DYK",
                            "awayTeamAbbName": "基迪纳摩",
                            "awayTeamAllName": "基辅迪纳摩",
                            "awayTeamCode": "DYK",
                            "awayTeamId": 281,
                            "backColor": "F75000",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.95",
                                "af": "0",
                                "d": "3.40",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "2.02",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:24:49"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.59",
                                "af": "0",
                                "d": "3.80",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "4.25",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:25:04"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "RAN",
                            "homeTeamAbbName": "流浪者",
                            "homeTeamAllName": "格拉斯哥流浪者",
                            "homeTeamCode": "RAN",
                            "homeTeamId": 220,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "欧冠",
                            "leagueAllName": "欧洲冠军联赛",
                            "leagueCode": "UCL",
                            "leagueId": 69,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026506,
                            "matchName": "",
                            "matchNum": 2010,
                            "matchNumDate": "",
                            "matchNumStr": "周二010",
                            "matchStatus": "Selling",
                            "matchTime": "02:45:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.590",
                                    "d": "3.800",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "4.250",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122337,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:25:04"
                                },
                                {
                                    "a": "2.950",
                                    "d": "3.400",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.020",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122337,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:24:49"
                                },
                                {
                                    "a": "1.590",
                                    "d": "3.800",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "4.250",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122364,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:25:04"
                                },
                                {
                                    "a": "2.950",
                                    "d": "3.400",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.020",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122364,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:24:49"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122337,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122364,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "FLU",
                            "awayTeamAbbName": "弗鲁米嫩",
                            "awayTeamAllName": "弗鲁米嫩塞",
                            "awayTeamCode": "FLU",
                            "awayTeamId": 572,
                            "backColor": "00A653",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "3.85",
                                "af": "0",
                                "d": "2.80",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "1.95",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:36:28"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.67",
                                "af": "0",
                                "d": "3.21",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "4.56",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:36:39"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "GRM",
                            "homeTeamAbbName": "格雷米奥",
                            "homeTeamAllName": "格雷米奥",
                            "homeTeamCode": "GRM",
                            "homeTeamId": 791,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "解放者杯",
                            "leagueAllName": "南美解放者杯",
                            "leagueCode": "LBC",
                            "leagueId": 49,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026507,
                            "matchName": "",
                            "matchNum": 2011,
                            "matchNumDate": "",
                            "matchNumStr": "周二011",
                            "matchStatus": "Selling",
                            "matchTime": "06:00:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "1.670",
                                    "d": "3.210",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "4.560",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122333,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:36:39"
                                },
                                {
                                    "a": "3.850",
                                    "d": "2.800",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.950",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122333,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:36:28"
                                },
                                {
                                    "a": "1.670",
                                    "d": "3.210",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "4.560",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122353,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:36:39"
                                },
                                {
                                    "a": "3.850",
                                    "d": "2.800",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.950",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122353,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:36:28"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122333,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 1,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122353,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "比赛将在巴西-库里蒂巴举行",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "ALM",
                            "awayTeamAbbName": "米竞技",
                            "awayTeamAllName": "米内罗竞技",
                            "awayTeamCode": "ALM",
                            "awayTeamId": 563,
                            "backColor": "00A653",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-13",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.57",
                                "af": "0",
                                "d": "2.57",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "2.85",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:12:17"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "6.90",
                                "af": "0",
                                "d": "3.85",
                                "df": "0",
                                "goalLine": "+1",
                                "goalLineValue": "+1.00",
                                "h": "1.38",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:12:31"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "SAZ",
                            "homeTeamAbbName": "圣洛伦索",
                            "homeTeamAllName": "圣洛伦索",
                            "homeTeamCode": "SAZ",
                            "homeTeamId": 642,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "解放者杯",
                            "leagueAllName": "南美解放者杯",
                            "leagueCode": "LBC",
                            "leagueId": 49,
                            "lineNum": "",
                            "matchDate": "2024-08-14",
                            "matchId": 1026508,
                            "matchName": "",
                            "matchNum": 2012,
                            "matchNumDate": "",
                            "matchNumStr": "周二012",
                            "matchStatus": "Selling",
                            "matchTime": "08:30:00",
                            "matchWeek": "周二",
                            "oddsList": [
                                {
                                    "a": "6.900",
                                    "d": "3.850",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.380",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122352,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:12:31"
                                },
                                {
                                    "a": "2.570",
                                    "d": "2.570",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.850",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122352,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:12:17"
                                },
                                {
                                    "a": "6.900",
                                    "d": "3.850",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.380",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122334,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:12:31"
                                },
                                {
                                    "a": "2.570",
                                    "d": "2.570",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.850",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122334,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:12:17"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122352,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122334,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        }
                    ],
                    "weekday": "周二",
                    "matchCount": 11,
                    "matchNumDate": ""
                },
                {
                    "businessDate": "2024-08-14",
                    "subMatchList": [
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "ATA",
                            "awayTeamAbbName": "亚特兰大",
                            "awayTeamAllName": "亚特兰大",
                            "awayTeamCode": "ATA",
                            "awayTeamId": 117,
                            "backColor": "8EAD12",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-14",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "5.40",
                                "af": "0",
                                "d": "4.25",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "1.41",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:48:19"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "2.43",
                                "af": "0",
                                "d": "3.65",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "2.25",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "21:48:35"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "RMD",
                            "homeTeamAbbName": "皇马",
                            "homeTeamAllName": "皇家马德里",
                            "homeTeamCode": "RMD",
                            "homeTeamId": 664,
                            "isHide": 0,
                            "isHot": 1,
                            "leagueAbbName": "欧超杯",
                            "leagueAllName": "欧洲超级杯",
                            "leagueCode": "USC",
                            "leagueId": 71,
                            "lineNum": "",
                            "matchDate": "2024-08-15",
                            "matchId": 1026521,
                            "matchName": "",
                            "matchNum": 3002,
                            "matchNumDate": "",
                            "matchNumStr": "周三002",
                            "matchStatus": "Selling",
                            "matchTime": "03:00:00",
                            "matchWeek": "周三",
                            "oddsList": [
                                {
                                    "a": "2.430",
                                    "d": "3.650",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "2.250",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122307,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:48:35"
                                },
                                {
                                    "a": "5.400",
                                    "d": "4.250",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.410",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122307,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:48:19"
                                },
                                {
                                    "a": "2.430",
                                    "d": "3.650",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "2.250",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122304,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:48:35"
                                },
                                {
                                    "a": "5.400",
                                    "d": "4.250",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "1.410",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122304,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "21:48:19"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122307,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 1,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122304,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "比赛将在波兰-华沙举行",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "RIP",
                            "awayTeamAbbName": "河床",
                            "awayTeamAllName": "河床",
                            "awayTeamCode": "RIP",
                            "awayTeamId": 635,
                            "backColor": "00A653",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-14",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.22",
                                "af": "0",
                                "d": "2.90",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "3.00",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:45"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "5.10",
                                "af": "0",
                                "d": "3.70",
                                "df": "0",
                                "goalLine": "+1",
                                "goalLineValue": "+1.00",
                                "h": "1.51",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:46"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "TLL",
                            "homeTeamAbbName": "铁路工场",
                            "homeTeamAllName": "铁路工场",
                            "homeTeamCode": "TLL",
                            "homeTeamId": 1993,
                            "isHide": 0,
                            "isHot": 0,
                            "leagueAbbName": "解放者杯",
                            "leagueAllName": "南美解放者杯",
                            "leagueCode": "LBC",
                            "leagueId": 49,
                            "lineNum": "",
                            "matchDate": "2024-08-15",
                            "matchId": 1026510,
                            "matchName": "",
                            "matchNum": 3003,
                            "matchNumDate": "",
                            "matchNumStr": "周三003",
                            "matchStatus": "Selling",
                            "matchTime": "08:30:00",
                            "matchWeek": "周三",
                            "oddsList": [
                                {
                                    "a": "5.100",
                                    "d": "3.700",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.510",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122346,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:46"
                                },
                                {
                                    "a": "2.220",
                                    "d": "2.900",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "3.000",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122346,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                },
                                {
                                    "a": "5.100",
                                    "d": "3.700",
                                    "goalLine": "+1",
                                    "goalLineF": "",
                                    "goalLineValue": "+1.00",
                                    "h": "1.510",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122312,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:46"
                                },
                                {
                                    "a": "2.220",
                                    "d": "2.900",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "3.000",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122312,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122346,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122312,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        },
                        {
                            "awayRank": "",
                            "awayTeamAbbEnName": "PAE",
                            "awayTeamAbbName": "帕梅拉斯",
                            "awayTeamAllName": "帕尔梅拉斯",
                            "awayTeamCode": "PAE",
                            "awayTeamId": 577,
                            "backColor": "00A653",
                            "baseAwayTeamId": 0,
                            "baseHomeTeamId": 0,
                            "bettingAllUp": 0,
                            "bettingSingle": 0,
                            "businessDate": "2024-08-14",
                            "crs": {},
                            "groupName": "",
                            "had": {
                                "a": "2.92",
                                "af": "0",
                                "d": "2.87",
                                "df": "0",
                                "goalLine": "",
                                "goalLineValue": "",
                                "h": "2.28",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:45"
                            },
                            "hafu": {},
                            "hhad": {
                                "a": "1.48",
                                "af": "0",
                                "d": "3.75",
                                "df": "0",
                                "goalLine": "-1",
                                "goalLineValue": "-1.00",
                                "h": "5.35",
                                "hf": "0",
                                "updateDate": "2024-08-13",
                                "updateTime": "09:36:46"
                            },
                            "homeRank": "",
                            "homeTeamAbbEnName": "BOF",
                            "homeTeamAbbName": "博塔弗戈",
                            "homeTeamAllName": "博塔弗戈",
                            "homeTeamCode": "BOF",
                            "homeTeamId": 566,
                            "isHide": 0,
                            "isHot": 1,
                            "leagueAbbName": "解放者杯",
                            "leagueAllName": "南美解放者杯",
                            "leagueCode": "LBC",
                            "leagueId": 49,
                            "lineNum": "",
                            "matchDate": "2024-08-15",
                            "matchId": 1026511,
                            "matchName": "",
                            "matchNum": 3004,
                            "matchNumDate": "",
                            "matchNumStr": "周三004",
                            "matchStatus": "Selling",
                            "matchTime": "08:30:00",
                            "matchWeek": "周三",
                            "oddsList": [
                                {
                                    "a": "1.480",
                                    "d": "3.750",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "5.350",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122349,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:46"
                                },
                                {
                                    "a": "2.920",
                                    "d": "2.870",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.280",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122349,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                },
                                {
                                    "a": "1.480",
                                    "d": "3.750",
                                    "goalLine": "-1",
                                    "goalLineF": "",
                                    "goalLineValue": "-1.00",
                                    "h": "5.350",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122323,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:46"
                                },
                                {
                                    "a": "2.920",
                                    "d": "2.870",
                                    "goalLine": "",
                                    "goalLineF": "",
                                    "goalLineValue": "",
                                    "h": "2.280",
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "odds": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122323,
                                    "updateDate": "2024-08-13",
                                    "updateTime": "09:36:45"
                                }
                            ],
                            "poolList": [
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HHAD",
                                    "poolId": 1122349,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                },
                                {
                                    "allUp": 0,
                                    "bettingAllup": 1,
                                    "bettingSingle": 0,
                                    "cbtAllUp": 0,
                                    "cbtSingle": 0,
                                    "cbtValue": 2,
                                    "fixedOddsgoalLine": "",
                                    "intAllUp": 0,
                                    "intSingle": 0,
                                    "intValue": 2,
                                    "matchId": 0,
                                    "matchNum": 0,
                                    "poolCloseDate": "",
                                    "poolCloseTime": "",
                                    "poolCode": "HAD",
                                    "poolId": 1122323,
                                    "poolOddsType": "F",
                                    "poolStatus": "Selling",
                                    "sellInitialDate": "",
                                    "sellInitialTime": "",
                                    "single": 0,
                                    "updateDate": "",
                                    "updateTime": "",
                                    "vbtAllUp": 0,
                                    "vbtSingle": 0,
                                    "vbtValue": 0
                                }
                            ],
                            "remark": "",
                            "sellStatus": 2,
                            "taxDateNo": "",
                            "ttg": {},
                            "vote": {}
                        }
                    ],
                    "weekday": "周三",
                    "matchCount": 3,
                    "matchNumDate": ""
                }
            ],
            "matchDateList": [
                {
                    "businessDate": "2024-08-13",
                    "businessDateCn": "周二",
                    "matchDate": "",
                    "matchDateCn": ""
                },
                {
                    "businessDate": "2024-08-14",
                    "businessDateCn": "周三",
                    "matchDate": "",
                    "matchDateCn": ""
                }
            ],
            "allUpList": {
                "HHAD": [
                    {
                        "fValue": 1,
                        "formula": "2x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x3",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x4",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x4",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x5",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x6",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x11",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x5",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x6",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x10",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x16",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x20",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x26",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x6",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x7",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x15",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x20",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x22",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x35",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x42",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x50",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x57",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x7",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x8",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x21",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x35",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x120",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x8",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x9",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x28",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x56",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x70",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x247",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "Single",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "2x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "Single",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HHAD"
                    }
                ],
                "HAD": [
                    {
                        "fValue": 1,
                        "formula": "2x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x3",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x4",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x4",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x5",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x6",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x11",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x5",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x6",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x10",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x16",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x20",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x26",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x6",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x7",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x15",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x20",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x22",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x35",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x42",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x50",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x57",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x7",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x8",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x21",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x35",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x120",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x1",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x8",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x9",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x28",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x56",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x70",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x247",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "Single",
                        "formulaType": 1,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "2x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "3x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "4x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "5x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "6x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "7x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "8x1",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    },
                    {
                        "fValue": 1,
                        "formula": "Single",
                        "formulaType": 2,
                        "maxMatchCount": 0,
                        "poolCode": "HAD"
                    }
                ]
            },
            "leagueList": [
                {
                    "leagueId": "1",
                    "leagueName": "亚洲冠军联赛",
                    "leagueNameAbbr": "亚冠"
                },
                {
                    "leagueId": "49",
                    "leagueName": "南美解放者杯",
                    "leagueNameAbbr": "解放者杯"
                },
                {
                    "leagueId": "69",
                    "leagueName": "欧洲冠军联赛",
                    "leagueNameAbbr": "欧冠"
                },
                {
                    "leagueId": "71",
                    "leagueName": "欧洲超级杯",
                    "leagueNameAbbr": "欧超杯"
                }
            ],
            "totalCount": 14,
            "lastUpdateTime": "2024-08-13 21:48:35"
        }
    }
    const [fixedWidth, setFixedWidth] = useState('100%'); // 初始宽度
    const aRef = useRef(null);

    store.subscribe(() => {
        const storeData = store.getState();
        // console.log('subscribed signer:', storeData.EthereumReducer?.signer)
        setSigner(storeData.EthereumReducer?.signer); //更新store.name值
    });

    useEffect(() => {
        const updateFixedWidth = () => {
            const aElement: any = aRef.current;
            const width = aElement.offsetWidth;
            setFixedWidth(width);
        };

        // 初始设置
        updateFixedWidth();

        // 监听窗口大小变化
        window.addEventListener('resize', updateFixedWidth);

        // 清除监听器
        return () => window.removeEventListener('resize', updateFixedWidth);
    }, []);

    const updateCount = () => {
        // store.dispatch({type: HomeComponentReducerActionType.UPDATE_NAME, name: "其实我是想搞区块链全栈开发的,不得不把react学一学", payload: ""});
    }
    const callWithdraw = async () => {
        console.log(signer)
        const contractAddress = '0x36e0192af8437227b4D459E9021f9BCA87DB0f9c'
        const contractABI = LockContract.abi
        const lockContract = new ethers.Contract(contractAddress, contractABI, signer);

        await lockContract.on('Withdrawal', (owner, amount) => {
            console.log(`Withdraw event: Owner: ${owner}, Amount: ${amount.toString()}`);
        });

        // Call the withdraw function
        const tx = await lockContract.withdraw();
        await tx.wait(); // Wait for the transaction to be mined
        // store.dispatch({type: HomeComponentReducerActionType.UPDATE_NAME, name: "其实我是想搞区块链全栈开发的,不得不把react学一学", payload: ""});
    }

    // @ts-ignore allow-with-description
    const callAPI = () => {
        getInfo2().then((res: unknown) => {
            console.log(res)
        })
    }

    const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <div className="ml-32 mr-32 overflow-x-scroll">
            {/*<div className="font-bold text-lg">我我我</div>*/}
            <div ref={aRef} className="text-lg custom-border-color" style={{paddingBottom: 50}}>
                <div className="header flex border-t text-center">
                    <div className="border-l" style={{lineHeight: "80px", height: 80, minWidth: 100}}>赛事编号</div>
                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 120}}>赛事</div>
                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 120}}>开赛时间</div>
                    <div className="" style={{lineHeight: "80px", height: 80, width: "100%", minWidth: 360}}>主队 VS 客队</div>
                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>让球</div>
                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>胜</div>
                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>平</div>
                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>负</div>
                    <div className="" style={{minWidth: 200, borderRight: 0}}>
                        <div className="  " style={{lineHeight: "40px", height: 40, borderRight: 0}}>支持率</div>
                        <div className="flex border-t" style={{lineHeight: "40px", height: 40, borderRight: 0}}>
                            <div className="flex-1" style={{}}>胜</div>
                            <div className="flex-1" style={{}}>平</div>
                            <div className="flex-1" style={{borderRight: 0}}>负</div>
                        </div>
                    </div>
                </div>
                {matches.value.matchInfoList.map((eachInfo: any) => {
                    return (
                        <div key={eachInfo.businessDate}>
                            <div className="row-summary flex border-t border-l pl-2 pt-3 pb-3">{eachInfo.weekday} {eachInfo.businessDate} 共{eachInfo.matchCount}场比赛</div>
                            {eachInfo.subMatchList.map((eachMatch: any) => (
                                <div key={eachMatch.matchId} className="row-match flex border-t text-center">
                                    <div className="border-l " style={{lineHeight: "80px", height: 80, minWidth: 100}}>{eachMatch.matchNumStr}</div>
                                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 120, backgroundColor: "#" + eachMatch.backColor}}>{eachMatch.leagueAllName}</div>
                                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 120}}>{eachMatch.matchDate.substring(5,)} {eachMatch.matchTime.substring(0, 5)}</div>
                                    <div className="flex" style={{lineHeight: "80px", height: 80, width: "100%", minWidth: 360}}>
                                        <div className="flex-1 text-right" style={{borderRight: 0}}>{eachMatch.homeTeamAllName}</div>
                                        <div className="ml-8 mr-8" style={{borderRight: 0}}>VS</div>
                                        <div className="flex-1 text-left" style={{borderRight: 0}}>{eachMatch.awayTeamAllName}</div>
                                    </div>
                                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>
                                        <div className="  " style={{lineHeight: "40px", height: 40, borderRight: 0}}>{eachMatch.oddsList[1].goalLine || "0"}</div>
                                        <div className="  " style={{lineHeight: "40px", height: 40, borderRight: 0}}>{eachMatch.oddsList[0].goalLine || "0"}</div>
                                    </div>
                                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>
                                        <div className="unbet" style={{lineHeight: "40px", height: 40, borderRight: 0}}>{Number(eachMatch.oddsList[1].h).toFixed(2) || "0"}</div>
                                        <div className="unbet" style={{lineHeight: "40px", height: 40, borderRight: 0}}>{Number(eachMatch.oddsList[0].h).toFixed(2) || "0"}</div>
                                    </div>
                                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>
                                        <div className="unbet unbet-select" style={{lineHeight: "40px", height: 40, borderRight: 0}}>{Number(eachMatch.oddsList[1].d).toFixed(2) || "0"}</div>
                                        <div className="unbet" style={{lineHeight: "40px", height: 40, borderRight: 0}}>{Number(eachMatch.oddsList[0].d).toFixed(2) || "0"}</div>
                                    </div>
                                    <div className="" style={{lineHeight: "80px", height: 80, minWidth: 100}}>
                                        <div className="unbet" style={{lineHeight: "40px", height: 40, borderRight: 0}}>{Number(eachMatch.oddsList[1].a).toFixed(2) || "0"}</div>
                                        <div className="unbet" style={{lineHeight: "40px", height: 40, borderRight: 0}}>{Number(eachMatch.oddsList[0].a).toFixed(2) || "0"}</div>
                                    </div>
                                    <div className="" style={{minWidth: 200}}>
                                        <div className="flex" style={{lineHeight: "40px", height: 40, borderRight: 0}}>
                                            <div className="flex-1" style={{}}>10%</div>
                                            <div className="flex-1" style={{}}>11%</div>
                                            <div className="flex-1" style={{borderRight: 0}}>12%</div>
                                        </div>
                                        <div className="flex border-t" style={{lineHeight: "40px", height: 40, borderRight: 0}}>
                                            <div className="flex-1" style={{}}>10%</div>
                                            <div className="flex-1" style={{}}>10%</div>
                                            <div className="flex-1" style={{borderRight: 0}}>10%</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                })}
                <div className="border-t"></div>
            </div>
            <div className="fixed-bottom flex" style={{width: fixedWidth + 'px', minWidth: 1300}}>
                <div className="bottom-div ml-6 mr-10">已选0场比赛</div>
                <div className="flex items-center justify-center flex-col">
                    <div className="w-full">过关方式: M串N</div>
                    <div className="w-full">
                        <Checkbox.Group className="text-white" options={["1", "2", "3",]} defaultValue={['Apple']} onChange={onChange}/>
                    </div>
                </div>
                <div className="flex-1"></div>
                <div className="mr-10 flex items-center justify-center flex-col">
                    <InputNumber className="" defaultValue={1} max={50} min={1} suffix={"倍"} changeOnWheel={true} controls={true} style={{}}/>
                    <div className="">(最高50倍)</div>
                </div>
                <div className="mr-10 flex items-center justify-center flex-col">
                    <div className="w-full">投注金额: <span>22</span> wei</div>
                    <div className="w-full">理论最高奖金: <span>136.59</span> wei</div>
                </div>
                <div className="flex items-center text-right" style={{height: "inherit", lineHeight: "inherit"}}>
                    <Button className="mr-6" type="primary" onClick={callWithdraw}>奖金详情</Button>
                    <Button className="mr-6" type="primary" onClick={updateCount}>立即投注</Button>
                </div>
            </div>
            {/*<Button type="primary" onClick={callAPI}>call http api</Button>*/}
        </div>
    );
}

export default HomeComponent
