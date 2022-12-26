import React from "react";
import ReactDOM from "react-dom";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";
import "./styles-table/table-storage.css"

let tasks = [
  {
    id: 1,
    codeisrc: 'KRA40105519',
    song: 'Vợ người ta',
    singer: 'Phan Mạnh Quỳnh',
    timing: '04:27',
    type: 'pop',
    format:'Audio',
    status: 'online',
  },
  {
    id: 2,
    codeisrc: 'KRA40105519',
    song: 'Đưa nhau đi trốn',
    singer: 'Đen Vâu',
    timing: '16:18',
    type: 'ballad',
    format:'Audio',
    status: 'offline',
  },
  {
    id: 3,
    codeisrc: 'KRA40105519',
    song: 'Stream đến bao giờ',
    singer: 'MIXIMOI',
    timing: '3:30',
    type: 'ballad',
    format:'Audio',
    status: 'offline',
  },
];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let count = tasks.length;
const service = {
  fetchItems: payload => {
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: task => {
    count += 1;
    tasks.push({
      ...task,
      id: count
    });
    return Promise.resolve(task);
  },
  update: data => {
    const task = tasks.find(t => t.id === data.id);
    task.codeisrc = data.codeisrc;
    task.song = data.song;
    task.singer = data.singer;
    task.timing = data.timing;
    task.type = data.type;
    task.format = data.format;
    task.status = data.status;
    return Promise.resolve(task);

    // id: 1,
    // codeisrc: 'KRA40105519',
    // song: 'Vợ người ta',
    // singer: 'Phan Mạnh Quỳnh',
    // timing: '04:27',
    // type: 'pop',
    // format:'Audio',
    // status: 'online',
  },
  delete: data => {
    const task = tasks.find(t => t.id === data.id);
    tasks = tasks.filter(t => t.id !== task.id);
    return Promise.resolve(task);
  }
};

const styles = {
  container: { margin: 'auto', width: 'auto', padding: '100px 0 0 0' },
};

const TableStorage = () => {
  return (
    <div style={styles.container}>
    <CRUDTable
      // caption="Tasks"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="id" label="Id" hideInCreateForm />
        <Field name="song" label="Tên bản ghi" placeholder="Tên bản ghi" />
        <Field name="codeisrc" label="Mã ISRC" placeholder="Mã ISRC" />
        <Field name="singer" label="Ca sĩ" placeholder="Ca sĩ" />
        <Field name="timing" label="Thời lượng" placeholder="Thời lượng" />
        <Field name="type" label="Thể loại" placeholder="Thể loại" />
        <Field name="format" label="Định dạng" placeholder="Định dạng" />
        <Field name="status" label="Trạng thái" placeholder="Trạng thái" />
      </Fields>
      {/* <CreateForm
        title="Task Creation"
        message="Create a new task!"
        trigger="Create Task"
        onSubmit={task => service.create(task)}
        submitText="Create"
        validate={values => {
          const errors = {};
          if (!values.codeisrc) {
            errors.codeisrc = "Please, provide task's codeisrc";
          }

          if (!values.description) {
            errors.description = "Please, provide task's description";
          }

          return errors;
        }}
      /> */}

      <UpdateForm
        title="Cập nhật thông tin"
        trigger="Cập nhật"
        onSubmit={task => service.update(task)}
        submitText="Cập nhật"
        validate={values => {
          const errors = {};

          if (!values.id) {
            errors.id = "Please, provide id";
          }

          if (!values.codeisrc) {
            errors.codeisrc = "Please, provide task's codeisrc";
          }

          if (!values.song) {
            errors.song = "Please, provide task's singer";
          }

          if (!values.singer) {
            errors.singer = "Please, provide task's singer";
          }

          if (!values.timing || !values.type || !values.format || !values.status) {
            errors.timing = "Please, provide task's";
          }

          return errors;
        }}
      />

      {/* <DeleteForm
        title="Task Delete Process"
        message="Are you sure you want to delete the task?"
        trigger="Delete"
        onSubmit={task => service.delete(task)}
        submitText="Delete"
        validate={values => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      /> */}
    </CRUDTable>
  </div>
  )
}

export default TableStorage
//https://reactjsexample.com/a-react-table-that-includes-all-the-crud-operations/