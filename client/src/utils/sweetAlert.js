import swal from "sweetalert";

export const sweelAlertBasic = (msg = "done") => {
  swal(msg);
};
export const sweelAlert = (msg, type = "success") => {
  swal(msg.title, msg.msg, type);
};
export const sweelAlertConfrom = (msg, type = "success") => {
  swal({
    title: msg.title,
    text: msg.msg,
    icon: type,
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Deleted Successfull");
    } else {
      swal("Your data is safe");
    }
  });
};
