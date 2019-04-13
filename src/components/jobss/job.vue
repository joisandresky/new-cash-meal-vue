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
            <tr v-for="job in jobs" :key="job.job_id">
              <td>{{ job.job_id }}</td>
              <td>{{ job.job_title }}</td>
              <td>
                <button class="btn btn-info" @click="viewJob(job)">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </button>
                <button @click="editJob(job)" class="btn btn-info btn-xs">
                  <i class="fa fa-pencil"></i>
                </button>
                <button @click="deleteJob(job)" class="btn btn-danger btn-xs">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <modal name="add-job" @closed="closedForm">
      <div class="container">
        <div class="col-md-6 mt-3">
          <div class="card" style="margin-top:55px;left:135px;">
            <div class="card-header">Job Title</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <div class="form-group">
                  <input type="text" v-model="job" class="form-control">
                </div>
                <button @click="onSaveJob" type="submit" class="btn btn-primary">Submit</button>
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
                    <td>{{ current_job ? current_job.job_id: '-' }}</td>
                  </tr>
                  <tr>
                    <th>Job</th>
                    <td>{{ current_job ? current_job.job_title : '-' }}</td>
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
  data() {
    return {
      jobs: [],
      job: "",
      current_job: null,
      onEdit: false,
      cj_id: null
    };
  },
  mounted() {
    this.getJobs();
  },
  methods: {
    openForm() {
      this.$modal.show("add-job");
    },
    viewJob(job) {
      this.current_job = job;
      this.$modal.show("view-job");
    },
    closedForm(e) {
      this.onEdit = false;
      this.job = "";
      this.cj_id = null;
      this.current_job = null;
    },
    editJob(job) {
      this.onEdit = true;
      this.job = job.job_title;
      this.cj_id = job.job_id;
      this.$modal.show("add-job");
    },
    getJobs() {
      fetch("http://localhost:8000/api/jobs")
        .then(response => response.json())
        .then(response => {
          console.log("jobs data", response);
          if (response && response.jobs) {
            this.jobs = response.jobs;
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    onSaveJob() {
      if (!this.job) {
        alert("Job Title Cannot Be Null");
        return;
      }

      let confirm = window.confirm(
        "Apakah kamu yakin ingin menyimpan data ini ?"
      );
      if (confirm) {
        if (this.onEdit) {
          fetch("http://localhost:8000/api/jobs/" + this.cj_id, {
            method: "PUT",
            body: JSON.stringify({ job_title: this.job }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(res => {
              if (res && res.success) {
                alert(res.message);
                this.$modal.hide("add-job");
                this.getJobs();
              } else {
                alert(res.message ? res.message : "An Unknown Error Occured");
              }
            })
            .catch(err => {
              console.log("err", err);
            });
        } else {
          fetch("http://localhost:8000/api/jobs", {
            method: "POST",
            body: JSON.stringify({ job_title: this.job }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(res => {
              if (res && res.success) {
                alert(res.message);
                this.$modal.hide("add-job");
                this.getJobs();
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
    deleteJob(job) {
      let confirm = window.confirm(
        `Apakah kamu yakin ingin menghapus Job ${job.job_title}`
      );

      if (confirm) {
        fetch(`http://localhost:8000/api/jobs/${job.job_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(res => {
            console.log("response delete", res);
            if (res && res.success) {
              alert(res.message);
              this.getJobs();
            } else {
              alert(res.message ? res.message : "An Unknown Error Occured");
            }
          })
          .catch(err => {
            console.log("err", err);
          });
      }
    }
  }
};
</script>

<style>
</style>
