<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="page-header">
        <i class="fa fa-user"></i>&nbsp Employees
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
            <tr>
              <td>MN</td>
              <td>Pria</td>
              <td>09897577</td>
              <td>Bekasi</td>
              <td>Software Engineer</td>
              <td>
                <button class="btn btn-info" @click="viewEmployee">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button class="btn btn-info btn-xs">
                  <i class="fa fa-pencil"></i>
                </button>
                <button class="btn btn-danger btn-xs">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal name="add-employee" height="auto" :scrollable="true">
      <div class="container mt-3 mb-3">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">Employee</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-3 pt-0">Gender</legend>
                      <!-- <label class="form-check-label" for="exampleRadios2">Gender</label> -->
                      <div class="form-check col-sm-6 pt-0">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          checked
                        >
                        <label class="form-check-label col-sm-6 pt-0" for="exampleRadios1">Pria</label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        >
                        <label class="form-check-label" for="exampleRadios2">Wanita</label>
                      </div>
                    </div>
                  </fieldset>
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="addres">Adress</label>
                    <textarea class="form-control" id rows="3"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="job">Job</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
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
                    <td>MN</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>Pria</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>09897577</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>Bekasi</td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>Software Engineer</td>
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
export default {
  name: "employee",
  methods: {
    openForm() {
      this.$modal.show("add-employee");
    },
    viewEmployee() {
      this.$modal.show("view-employee");
    }
  }
};
</script>

<style>
</style>
