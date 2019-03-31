<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="page-header">
        <i class="fa fa-briefcase"></i>&nbsp Jobs
      </h2>
      <button class="btn btn-info mt-2" @click="openForm">Add Job</button>
      <hr class="my-4">
      <div class="row">
        <table class="table table-stripped table-hovered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Software Engineer</td>
              <td>
                <button class="btn btn-info" @click="viewJob">
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
    <modal name="add-job">
      <div class="container">
        <div class="col-md-6 mt-3">
          <div class="card" style="margin-top:55px;left:135px;">
            <div class="card-header">Job Title</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal name="view-job" height="auto">
      <div class="container mt-3 mb-3">
        <div class="card">
          <div class="card-header">Data Job</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>Job - ID</th>
                    <td>1</td>
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
  name: "job",
  methods: {
    openForm() {
      this.$modal.show("add-job");
    },
    viewJob() {
      this.$modal.show("view-job");
    }
  }
};
</script>

<style>
</style>
