<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="page-header">
        <i class="fa fa-arrow-circle-down"></i>&nbsp; Cash Out
      </h2>
      <button class="btn btn-info mt-2" @click="openForm">Add CashOut</button>
      <hr class="my-4">
      <div class="row">
        <table class="table table-stripped table-hovered">
          <thead>
            <tr>
              <th>Trx ID</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Employee</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cashOut in cashOuts" :key="cashOut.trx_id">
              <td>{{ cashOut.trx_id }}</td>
              <td>{{ cashOut.trx_amount }}</td>
              <td>{{ cashOut.trx_description }}</td>
              <td>{{ cashOut.trx_employee }}</td>
              <td>
                <img v-bind:src="cashOut.trx_image" alt>
              </td>
              <td>
                <button class="btn btn-info" @click="viewCashout">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button class="btn btn-info btn-xs">
                  <i class="fa fa-pencil"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal name="add-cashout" height="auto" :scrollable="true">
      <div class="container mb-3 mt-3">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <div class="form-group">
                  <label for="amount">Amount</label>
                  <input type="text" v-model="trx_amount" class="form-control" id>
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea class="form-control" v-model="trx_description" id rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="employee">Employee</label>
                  <vue-bootstrap-typeahead
                    :data="employees"
                    v-model="trx_employee"
                    size="lg"
                    :serializer="s => s.employee_name"
                    placeholder="Type an employees..."
                    @hit="selectedEmployee = $event"
                  />
                </div>
                <div class="form-group">
                  <label for="bukti_pembayaran">Payment Bill</label>
                  <picture-input
                    ref="pictureInput"
                    width="300"
                    height="300"
                    margin="16"
                    accept="image/jpeg, image/png"
                    size="10"
                    button-class="btn btn-primary"
                    :custom-strings="{
                      upload: '<h1>Bummer!</h1>',
                      drag: 'Drag a 😺 Image'
                    }"
                    @change="onChange"
                  ></picture-input>
                </div>
                <button type="button" @click="onSave" class="btn btn-primary">Submit</button>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal name="view-cashout" height="auto" :scrollable="true">
      <div class="container mt-3 mb-3">
        <div class="card">
          <div class="card-header">Data CashOut</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>TRX - ID</th>
                    <td>trx01</td>
                  </tr>
                  <tr>
                    <th>Amount</th>
                    <td>200000</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>Makan mie ayam</td>
                  </tr>
                  <tr>
                    <th>Employee</th>
                    <td>MNurul</td>
                  </tr>
                  <tr>
                    <th>Create At</th>
                    <td>2019-03-16</td>
                  </tr>
                  <tr>
                    <th>Stample Approvel</th>
                    <td>Need Approval</td>
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
import PictureInput from "vue-picture-input";

export default {
  name: "cashout",
  data() {
    return {
      image: null,
      trx_amount: 0,
      trx_description: "",
      trx_employee: null,
      employees: [],
      selectedEmployee: null,
      cashOuts: []
    };
  },
  components: {
    PictureInput
  },
  mounted() {
    this.getCashOuts();
  },
  methods: {
    openForm() {
      this.$modal.show("add-cashout");
    },
    viewCashout() {
      this.$modal.show("view-cashout");
    },
    onChange(image) {
      if (this.$refs.pictureInput.file) {
        this.image = this.$refs.pictureInput.file;
      } else {
        console.log("Old browser. No support for Filereader API");
      }
    },
    async getEmployees(query) {
      try {
        let res = await fetch(
          "http://localhost:8000/api/employees/search?value=" + query
        );
        let employees = await res.json();
        console.log("employeesss", employees);
        this.employees = employees;
      } catch (err) {
        console.log("err", err);
      }
    },
    getCashOuts() {
      fetch("http://localhost:8000/api/cashOuts")
        .then(response => response.json())
        .then(response => {
          console.log("cashOuts data", response);
          if (response && response.cashOuts) {
            this.cashOuts = response.cashOuts;
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    onSave() {
      let fd = new FormData();
      fd.append("trx_amount", this.trx_amount);
      fd.append("trx_description", this.trx_desctiption);
      fd.append("trx_employee", this.selectedEmployee.employee_id);
      fd.append("image", this.image);
      console.log(this.image);
      fetch("http://localhost:8000/api/cashOuts", {
        method: "POST",
        body: fd,
        headers: {
          // "Content-Type": "multipart/form-data"
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res && res.success) {
            alert(res.message);
            this.$modal.hide("add-cashout");
            this.getCashOuts();
            this.resetForm();
          } else {
            alert(res.message ? res.message : "An Unknown Error Occured");
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    resetForm() {
      this.employees = [];
      this.trx_amount = 0;
      this.trx_description = "";
      this.trx_employee = null;
      this.selectedEmployee = null;
    }
  },
  watch: {
    trx_employee: _.debounce(function(query) {
      this.getEmployees(query);
    }, 500)
  }
};
</script>

<style>
</style>
