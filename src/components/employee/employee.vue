<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="page-header">
        <i class="fa fa-user"></i>&nbsp; Employees
      </h2>
      <button class="btn btn-info mt-2" @click="openForm">Add Employee</button>
      <hr class="my-4">
      <div class="row">
        <table class="table table-stripped table-hovered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.employee_id">
              <td>{{ employee.employee_name }}</td>
              <td>{{ employee.employee_gender === 'male' ? 'Pria' : 'Wanita' }}</td>
              <td>{{ employee.employee_phone }}</td>
              <td>{{ employee.employee_address }}</td>
              <td>{{ employee.employee_job }}</td>
              <td>
                <button class="btn btn-info" @click="viewEmployee(employee)">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button @click="editEmployee(employee)" class="btn btn-info btn-xs">
                  <i class="fa fa-pencil"></i>
                </button>
                <button @click="deleteEmployee(employee)" class="btn btn-danger btn-xs">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal
      name="add-employee"
      @closed="resetForm"
      :adaptive="true"
      height="auto"
      :scrollable="true"
    >
      <div class="container mt-3 mb-3">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">Employee</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <!-- <form> -->
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" v-model="name" class="form-control" id>
                </div>
                <div class="form-group">
                  <label for="job">Job</label>
                  <vue-bootstrap-typeahead
                    :data="jobs"
                    v-model="job"
                    size="lg"
                    :serializer="s => s.job_title"
                    placeholder="Type an jobs..."
                    @hit="selectedJob = $event"
                  />
                  <!-- <input v-model="job" type="text" class="form-control" id> -->
                </div>
                <fieldset class="form-group">
                  <div class="row">
                    <legend class="col-form-label col-sm-3 pt-0">Gender</legend>
                    <!-- <label class="form-check-label" for="exampleRadios2">Gender</label> -->
                    <div class="form-check col-sm-6 pt-0">
                      <input
                        v-model="gender"
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="male"
                        checked
                      >
                      <label class="form-check-label col-sm-6 pt-0" for="exampleRadios1">Pria</label>
                    </div>
                    <div class="form-check">
                      <input
                        v-model="gender"
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="female"
                      >
                      <label class="form-check-label" for="exampleRadios2">Wanita</label>
                    </div>
                  </div>
                </fieldset>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" v-model="phone" class="form-control" id>
                </div>
                <div class="form-group">
                  <label for="addres">Adress</label>
                  <textarea v-model="address" class="form-control" id rows="3"></textarea>
                </div>
                <button @click="onSaveEmployee" type="submit" class="btn btn-primary">Submit</button>
                <!-- </form> -->
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <modal name="view-employee" height="auto" :scrollable="true">
      <div class="container mb-3 mt-3">
        <div class="card">
          <div class="card-header">Data Employee</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{{ current_employee ? current_employee.employee_name : '-' }}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{{ current_employee ? current_employee.employee_gender : '-' }}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{{ current_employee ? current_employee.employee_phone : '-' }}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{{ current_employee ? current_employee.employee_address : '-' }}</td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>{{ current_employee ? current_employee.employee_job : '-' }}</td>
                  </tr>
                </tbody>
              </table>
            </blockquote>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "employee",
  data() {
    return {
      employees: [],
      name: "",
      gender: "",
      phone: "",
      address: "",
      job: null,
      current_employee: null,
      ce_id: null,
      onEdit: false,
      jobs: [],
      selectedJob: null
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    openForm() {
      this.$modal.show("add-employee");
    },
    viewEmployee(employee) {
      this.current_employee = employee;
      this.$modal.show("view-employee");
    },
    editEmployee(employee) {
      this.onEdit = true;
      this.name = employee.employee_name;
      this.gender = employee.employee_gender;
      this.phone = employee.employee_phone;
      this.address = employee.employee_address;
      this.job = employee.employee_job;
      this.ce_id = employee.employee_id;
      this.$modal.show("add-employee");
    },
    getEmployees() {
      fetch("http://localhost:8000/api/employees")
        .then(response => response.json())
        .then(response => {
          console.log("employees data", response);
          if (response && response.employees) {
            this.employees = response.employees;
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    onSaveEmployee() {
      let confirm = window.confirm(
        "Apakah kamu yakin ingin menyimpan data ini ?"
      );
      if (confirm) {
        if (this.onEdit) {
          fetch("http://localhost:8000/api/employees/" + this.ce_id, {
            method: "PUT",
            body: JSON.stringify({
              employee_name: this.name,
              employee_gender: this.gender,
              employee_address: this.address,
              employee_phone: this.phone
              // employee_job: this.selectedJob ? this.selectedJob.job_id : null
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(res => {
              if (res && res.success) {
                alert(res.message);
                this.$modal.hide("add-employee");
                this.getEmployees();
                this.resetForm();
              } else {
                alert(res.message ? res.message : "An Unknown Error Occured");
              }
            })
            .catch(err => {
              console.log("err", err);
            });
        } else {
          fetch("http://localhost:8000/api/employees", {
            method: "POST",
            body: JSON.stringify({
              employee_name: this.name,
              employee_gender: this.gender,
              employee_address: this.address,
              employee_phone: this.phone,
              employee_job: this.selectedJob ? this.selectedJob.job_id : null
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(res => {
              if (res && res.success) {
                alert(res.message);
                this.$modal.hide("add-employee");
                this.getEmployees();
                this.resetForm();
              } else {
                alert(res.message ? res.message : "An Unknown Error Occured");
              }
            })
            .catch(err => {
              console.log("err", err);
            });
        }
      }
    },
    deleteEmployee(employee) {
      let confirm = window.confirm(
        `Apakah kamu yakin ingin menghapus Employee ${employee.employee_name}`
      );

      if (confirm) {
        fetch(`http://localhost:8000/api/employees/${employee.employee_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(res => {
            console.log("response delete", res);
            if (res && res.success) {
              alert(res.message);
              this.getEmployees();
            } else {
              alert(res.message ? res.message : "An Unknown Error Occured");
            }
          })
          .catch(err => {
            console.log("err", err);
          });
      }
    },
    resetForm() {
      this.job = null;
      this.name = "";
      this.gender = "";
      this.address = "";
      this.phone = "";
      this.current_employee = null;
      this.onEdit = false;
      this.ce_id = null;
      this.jobs = [];
      this.selectedJob = null;
    },
    async getJobs(query) {
      try {
        let res = await fetch(
          "http://localhost:8000/api/jobs/search?value=" + query
        );
        let jobs = await res.json();
        console.log("jobsss", jobs);
        this.jobs = jobs;
      } catch (err) {
        console.log("err", err);
      }
    }
  },
  watch: {
    job: _.debounce(function(query) {
      this.getJobs(query);
    }, 500)
  }
};
</script>

<style>
</style>
