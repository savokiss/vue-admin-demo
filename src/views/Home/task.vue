<template>
<div class="task">
  <el-tabs :tab-position="tabPosition">
    <el-tab-pane label="我的任务">
      <el-form :model="tasks" ref="" label-width="100px" class="demo-dynamic">
        <el-form-item>
          <el-row type="flex" class="row-bg">
            <el-col :span = "5">
                  <el-input></el-input>
            </el-col>
            <el-col :span = "4" :offset="1">
                  <el-button icon="el-icon-search" circle></el-button>
            </el-col>
            <el-col :span = "1" :push = "12">
                  <el-button type="success" icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
            </el-col>
         </el-row>
      </el-form-item>
    </el-form>
     <!-- Form -->
    <el-dialog title="添加任务" :visible.sync="dialogFormVisible">
      <el-form ref="form"  label-width="80px" v-model="tasks">
  <el-form-item label="任务名称">
    <el-input v-model="tasks.name"></el-input>
  </el-form-item>
  <el-form-item label="负责人">
    <el-select v-model="tasks.head" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="进度">
        <div class="block">
    <el-slider></el-slider>
  </div>
  </el-form-item>
  <el-form-item label="开始时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="tasks.start" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="结束时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="tasks.end" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="任务描述">
    <el-input type="textarea" v-model="tasks.describe"></el-input>
  </el-form-item>
</el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTask">确 定</el-button>
      </div>
    </el-dialog>
        <el-table
            :data = "tasks"
            style = "width: 100%"
            size = "medium">
        <el-table-column
        prop="order"
        label="序号"
        width="150">
        </el-table-column>
        <el-table-column
        prop="name"
        label="名称"
        width="150">
        </el-table-column>
        <el-table-column
        prop="head"
        label="负责人"
        width="150">
        </el-table-column>
        <el-table-column
        prop="plan"
        label="进度"
        width="150">
        </el-table-column>
        <el-table-column
        prop="start"
        label="开始时间"
        width="160">
        </el-table-column>
        <el-table-column
        prop="end"
        label="结束时间"
        width="160">
        </el-table-column>
        <el-table-column
            prop="tag"
            label="标签"
            width="120"
            :filters="[{ text: '正常', value: '正常' }, { text: '紧急', value: '紧急' }]"
            filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '正常' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
     <el-table-column
        prop="describe"
        label="描述"
        width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="140">
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">完成</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-tab-pane>
    <el-tab-pane label="已完成">配置管理</el-tab-pane>
    <el-tab-pane label="全部">角色管理</el-tab-pane>
    <el-tab-pane label="统计">统计</el-tab-pane>
  </el-tabs>
</div>

</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      tabPosition: 'top',
      tasks: [
        {
          id: '001',
          order: '1',
          name: '熟悉项目',
          head: '王小虎',
          plan: '20',
          start: '2016-05-04',
          end: '2016-05-04',
          tag: '正常',
          describe: '1'
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      rules: {
        name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
      loading2: false
    }
  },
  created () {
    axios.get('http://localhost:3000/answer').then(response => {
      console.log(response.data)
      this.tasks = response.data
    })
    // .catch(error => {
    //  this.$notify({
    //    title: '失败',
    //    message: '获取数据失败',
    //    type: ''
    //  })
    //  console.log('失败')
    // })
  },
  methods: {
    addTask () {
      this.tasks.push({
        id: '001',
        order: '2',
        name: '熟悉项目',
        head: '王小虎',
        plan: '20',
        start: '2016-05-04',
        end: '2016-05-04',
        tag: '紧急',
        describe: '1'
      })
      this.dialogFormVisible = false
    }
  }
}
</script>

<style lang="scss">
.task {
  width: 100%;
  height: 100%;
}
// 面包屑导航
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
}
// table
.el-table {
  padding: 10px;
}
</style>
