/**
 * +----------------------------------------------------------------------
 * | 「e家宜业」 —— 助力物业服务升级，用心服务万千业主
 * +----------------------------------------------------------------------
 * | Copyright (c) 2020~2022 https://www.chowa.cn All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed 未经许可不能去掉「e家宜业」和「卓瓦科技」相关版权
 * +----------------------------------------------------------------------
 * | Author: contact@chowa.cn
 * +----------------------------------------------------------------------
 */

import { TemplateMessage } from '~/types/content';

// 小程序的
// 报修 分配工单 确认工单 工单完成
export const MP_REPAIR_ALLOT_TPL = 'jdNZnKYJDxBzYH-exysyz0dsT5pg_Rq0t96mA95W6qc';
export const MP_REPAIR_CONFIRM_TPL = 'SudCR7ud-tIIv0fcdnqTP4QKTI7BRkm2LNIS8wMCXxE';
export const MP_REPAIR_FINISH_TPL = 'wZma2Mk-1D0YkUiBGAC-XzV1SCTtuecjNgYLeXPgMy4';

// 投诉 分配工单 确认工单 工单完成
export const MP_COMPLAIN_ALLOT_TPL = 'gl0Qws6L2z2xQCA-JhODR-ZB5lIYPk7eYpxd9iJp2WI';
export const MP_COMPLAIN_CONFRIM_TPL = 'gl0Qws6L2z2xQCA-JhODR2rG1tMj4l3lplZsfvbbaUM';
export const MP_COMPLAIN_FINISH_TPL = '3SDhJMjnLTcLmgxjppWERhNxUShHRz0QEPsPIbblPQs';

// 挪车
export const MP_MOVE_CAR_TPL = 'UJCCanhHSMypkR6RfdXRf0F7h8zKAYe6SMV9sMyk670';

// 业主认证的
export const MP_OWNER_APPROVE = 'gTPZs4bMecPssUMIk5AQN7Bf8i-d80hLrvCrWBGOc8o';

// 公众号的
// 通知物业工单
export const OA_NOTICE_TO_PROPERTY_COMPANY_USER = '';

// 访客通知
export const OA_NOTICE_TO_VISTOR = '';

// 小区通知
// 停水 1
export const OA_NOTICE_COMMUNITY_USER_STOP_WATER = '';
export const OA_NOTICE_COMMUNITY_USER_STOP_WATER_TPL: TemplateMessage = [
    {
        label: '',
        key: 'first',
        type: 'DATA',
        value: undefined
    },
    {
        label: '停水时间',
        key: 'keyword1',
        type: 'DATA',
        value: undefined
    },
    {
        label: '停水区域',
        key: 'keyword2',
        type: 'DATA',
        value: undefined
    },
    {
        label: '停水原因',
        key: 'keyword3',
        type: 'DATA',
        value: undefined
    },
    {
        label: '',
        key: 'remark',
        type: 'DATA',
        value: undefined
    }
];
// 停电 2
export const OA_NOTICE_COMMUNITY_USER_STOP_ELECTRICITY = '';
export const OA_NOTICE_COMMUNITY_USER_STOP_ELECTRICITY_TPL: TemplateMessage = [
    {
        label: '',
        key: 'first',
        type: 'DATA',
        value: undefined
    },
    {
        label: '停电时间',
        key: 'keyword1',
        type: 'DATA',
        value: undefined
    },
    {
        label: '停电区域',
        key: 'keyword2',
        type: 'DATA',
        value: undefined
    },
    {
        label: '停电原因',
        key: 'keyword3',
        type: 'DATA',
        value: undefined
    },
    {
        label: '',
        key: 'remark',
        type: 'DATA',
        value: undefined
    }
];

// 会议通知
export const OA_MEETING_BROADCAST = '';

// 流程审批通知
export const OA_NOTICE_WORKFLOW_APPROVER = '';
// 流程审批结果
export const OA_NOTICE_WORKFLOW_RESULT = '';
// 物业收费通知
export const OA_NOTICE_OWNER_PROPERTY_FEE = '';
// 物业费催缴
export const OA_NOTICE_URGE_OWNER_PROPERTY_FEE = '';

// 短信推送

// 物业收费通知
export const SMS_NOTICE_OWNER_PROPERTY_FEE = '';
// 物业费催缴
export const SMS_NOTICE_URGE_OWNER_PROPERTY_FEE = '';
