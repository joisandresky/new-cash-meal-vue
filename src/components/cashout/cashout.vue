<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="page-header">
        <i class="fa fa-arrow-circle-down"></i>&nbsp Cash Out
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
              <th>Create at</th>
              <th>Stampless Approval</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>trx01</td>
              <td>200000</td>
              <td>Makan mie ayam</td>
              <td>MNurul</td>
              <td>2019-03-16</td>
              <td>Need Approval</td>
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
                <form>
                  <div class="form-group">
                    <label for="trxid">TRX-Id</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="amount">Amount</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id rows="3"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="employee">Employee</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="create_at">Create at</label>
                    <input type="text" class="form-control" id>
                  </div>
                  <div class="form-group">
                    <label for="stample">Stample Approvel</label>
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
export default {
  name: "cashout",
  methods: {
    openForm() {
      this.$modal.show("add-cashout");
    },
    viewCashout() {
      this.$modal.show("view-cashout");
    }
  }
};
</script>

<style>
</style>
