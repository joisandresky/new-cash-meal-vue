<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="page-header">
        <i class="fa fa-briefcase"></i>&nbsp Deposit
      </h2>
      <button class="btn btn-info mt-2" @click="openForm">Add Deposit</button>
      <hr class="my-4">
      <div class="row">
        <table class="table table-stripped table-hovered">
          <thead>
            <tr>
              <th>Deposit ID</th>
              <th>Deposit Amount</th>
              <th>Deposit Employee</th>
              <th>Create at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dpt01</td>
              <td>200000</td>
              <td>MNurul</td>
              <td>2019-03-16</td>
              <td>
                <button class="btn btn-info" @click="viewDeposit">
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
    <modal name="add-deposit" height="auto" :scrollable="true">
      <div class="container mb-3 mt-3">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <form>
                  <div class="form-group">
                    <label for="deposit">Deposit-Id</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="employee">Employee</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="create_at">Create at</label>
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
    <modal name="view-deposit" height="auto" :scrollable="true">
      <div class="container mt-3 mb-3">
        <div class="card mt-3">
          <div class="card-header">Data Deposit</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>Deposit - ID</th>
                    <td>dpt01</td>
                  </tr>
                  <tr>
                    <th>Amount</th>
                    <td>200000</td>
                  </tr>
                  <tr>
                    <th>Employee</th>
                    <td>MNurul</td>
                  </tr>
                  <tr>
                    <th>Create At</th>
                    <td>2019-03-16</td>
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
  name: "deposit",
  methods: {
    openForm() {
      this.$modal.show("add-deposit");
    },
    viewDeposit() {
      this.$modal.show("view-deposit");
    }
  }
};
</script>

<style>
</style>
