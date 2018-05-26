import React, {Component} from 'react'
import GeneralTable from '../Shared/Components/GeneralTable'
const data = [{
  key: 1,
  workerId: 3,
  workerName: 3,
  department: 'fdsa',
  month: 5,
  group: 6
}, {
  key: 2,
  workerId: 2,
  workerName: 4,
  department: 'fdsa',
  month: 5,
  group: 6
}]

export default class WorkerRolesSetting extends Component {
  render() {
    const columns = [{
      title: '职员编号',
      dataIndex: 'workerId',
      type: 'EditableInput'
    }, {
      title: '职员姓名',
      dataIndex: 'workerName'
    }, {
      title: '编制部门',
      dataIndex: 'department'
    }, {
      title: '月份',
      dataIndex: 'month'
    }, {
      title: '组处',
      dataIndex: 'group'
    }, {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      type: 'Button',
      buttonDes: [{
        name: 'action1',
        action: () => alert(1)
      }]
    }]
    return (
      <div>
        <GeneralTable
          borderd
          pagination
          title='绩效设置 -> 职员角色设置'
          columns={columns}
          dataSource={data} />
      </div>
    )
  }
}
