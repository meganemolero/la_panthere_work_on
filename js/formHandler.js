$(function(){function t(t){var e="./includes/"+t.attr("id")+".php";return t.attr("template-path")&&(e=t.attr("template-path")+"/includes/"+t.attr("id")+".php"),e}$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitSuccess:function(e,i){if(!e.attr("action")){i.preventDefault();var s=t(e),a={};e.find("input, textarea, option:selected").each(function(t){var e=$(this).val(),i=$(this).attr("id");$(this).is(":checkbox")?e=$(this).is(":checked"):$(this).is(":radio")?e=$(this).val()+" = "+$(this).is(":checked"):$(this).is("option:selected")&&(i=$(this).parent().attr("id")),a[i]=e}),$.ajax({url:s,type:"POST",data:a,cache:!1,success:function(){e.is("[data-success-msg]")?e.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+e.attr("data-success-msg")+"</strong></div></div>"):window.location.replace(e.attr("success-url")),e.trigger("reset")},error:function(){0==$("#form-alert").length&&e.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+e.attr("data-fail-msg")+"</strong></div></div>")}})}},filter:function(){return $(this).is(":visible")}})});