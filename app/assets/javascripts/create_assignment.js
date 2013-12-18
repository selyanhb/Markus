/**
 * page specific event handlers for assignments/new.html.erb
/ 
 */
jQuery(document).ready(function(){ 

  new jQuery('#assignment_due_date').change(function(element, value) {
    update_due_date(jQuery('#assignment_due_date').val());
  })

  new jQuery('#assignment_section_due_dates_type').change( function(element, value) {
    toggle_sections_due_date(jQuery('#assignment_section_due_dates_type').val());
  })


  new jQuery('#remark_due_date').change(function(element, value) {
    check_due_date(jQuery('#remark_due_date').val());
  })
});
	
function toggle_persist_groups(persist_groups) {
  if(persist_groups) {
    jQuery("#persist_groups_assignment").attr("disabled", false);
    jQuery('persist_groups_assignment_style').removeClass('disable');
    jQuery('#persist_groups_assignment').change();
    jQuery("#is_group_assignment").attr("disabled", true);
    jQuery('is_group_assignment').addClass('disable');
    jQuery("#student_form_groups").attr("disabled", true);
    jQuery('student_form_groups_style').addClass('disable');
    jQuery('#assignment_group_min').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('#assignment_group_max').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('group_limit_style').addClass('disable')
    jQuery('#ssignment_group_name_autogenerated').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('is_group_assignment_style').addClass('disable');
  } else {
    jQuery('#ssignment_group_name_autogeneratedpersist_groups_assignment').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('persist_groups_assignment_style').addClass('disable');
    jQuery('#is_group_assignment').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});
    jQuery('is_group_assignment').removeClass('disable');
    jQuery('is_group_assignment_style').removeClass('disable');
    toggle_group_assignment(jQuery('#is_group_assignment').val());
  }
}

function toggle_group_assignment(is_group_assignment) {
  jQuery('#is_group_assignment').val(is_group_assignment);
  if(is_group_assignment) {
    jQuery('#student_form_groups').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});
    jQuery('student_form_groups_style').removeClass('disable');
    jQuery("#persist_groups").attr("disabled", true);
    jQuery('persist_groups_assignment_style').addClass('disable');
    jQuery('group_properties').removeClass('disable');
    toggle_student_form_groups(jQuery('#student_form_groups').val());
  } else {
    jQuery('group_properties').addClass('disable');
    jQuery("#assignment_group_min").attr("disabled", true);
    jQuery("#assignment_group_max").attr("disabled", true);
    jQuery('group_limit_style').addClass('disable');
    jQuery("#student_form_groups").attr("disabled", true);
    jQuery('student_form_groups_style').addClass('disable');
    jQuery('#ssignment_group_name_autogenerated').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('group_name_autogenerated_style').addClass('disable');
    jQuery("#persist_groups").attr("disabled", false);
    jQuery('persist_groups_assignment_style').removeClass('disable');
  }
}

function toggle_student_form_groups(student_form_groups) {
  if(student_form_groups) {
    jQuery('#assignment_group_min').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});
    jQuery('#assignment_group_max').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('group_limit_style').removeClass('disable');
    jQuery('#assignment_group_name_autogenerated').val();
    jQuery('#assignment_group_name_autogenerated').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('group_name_autogenerated_style').addClass('disable');
  } else {
    jQuery('#assignment_group_min').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('#assignment_group_max').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jquery('group_limit_style').addClass('disable');
    jQuery('#assignment_group_name_autogenerated').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});
    jQuery('group_name_autogenerated_style').removeClass('disable');
  }
}

function toggle_remark_requests(allow_remark_requests) {
  jQuery('#allow_remarks').val(allow_remark_requests);
  if (allow_remark_requests) {
    jQuery('#remark_due_date').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});
    jQuery('#assignment_remark_message').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});
    jQuery("#remark_properties").removeClass('disable');
  } else {
    jQuery('#remark_due_date').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery('#assignment_remark_message').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery("#remark_properties").addClass('disable');
  }
}

function toggle_automated_tests(is_testing_framework_enabled) {

  jQuery('#is_testing_framework_enabled').val(is_testing_framework_enabled);

  if(is_testing_framework_enabled) {
    jQuery('tokens').removeClass('disable');
    jQuery('#tokens_per_day').find('input, textarea').each(function(i){jQuery(this).attr("readonly","readonly");});

    jQuery("antbuildfile_style").each(function(node) { node.removeClass('disable'); });
    jQuery("antbuildfile_style input").each(function() {
      jQuery(node).enable();
    });
    jQuery("antbuildprop_style").each(function(node) { node.removeClass('disable'); });
    jQuery("antbuildprop_style input").each(function() {
      jQuery(node).enable();
	});
    jQuery("test_files .test_file").each(function(node) { node.removeClass('disabled'); });
    jQuery("test_files .test_file input").each(function() {
      jQuery(node).enable();
    });
   jQuery("lib_files .test_file").each(function(node) { node.removeClass('disabled'); });
    jQuery("lib_files .test_file input").each(function() {
      jQuery(node).enable();
    });
    jQuery("parser_files .test_file").each(function(node) { node.removeClass('disabled'); });
    jQuery("parser_files .test_file input").each(function() {
      jQuery(node).enable();
    });
// yes 
  } else {
    jQuery('tokens').addClass('disable');
    jQuery('#tokens_per_day').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
    jQuery("antbuildfile_style").each(function(node) { node.addClass('disable'); });
    jQuery("antbuildfile_style input").each(function() {
      jQuery(this).attr("readonly","readonly"); 
    });
    jQuery("antbuildprop_style").each(function(node) { node.addClass('disable'); });
    jQuery("antbuildprop_style input").each(function() {
      jQuery(node).attr("disabled", true);
    });
    jQuery("test_files .test_file").each(function(node) { node.addClass('disabled'); });
    jQuery("test_files .test_file input").each(function() {
      jQuery(node).attr("disabled", true);
    });
    jQuery("lib_files .test_file").each(function(node) { node.addClass('disabled'); });
    jQuery("lib_files .test_file input").each(function() {
      jQuery(node).attr("disabled", true);
    });
    jQuery("parser_files .test_file").each(function(node) { node.addClass('disabled'); });
    jQuery("parser_files .test_file input").each(function() {
      jQuery(node).attr("disabled", true);
    });
  }
}

function request_group_properties(assignment_id) {
/*  new Ajax.Request('update_group_properties_on_dependency', {asynchronous:true, evalScripts:true, parameters:'assignment_id=' + $F('assignment_dependency_list')}*/
}

function update_group_properties(is_group_assignment, student_form_groups, group_min, group_max, group_name_autogenerated) {
 jQuery('#is_group_assignment').val(is_group_assignment);
 jQuery('#student_form_groups').val(student_form_groups);
 jQuery('#assignment_group_min').val(group_min);
 jQuery('#assignment_group_max').val(group_max);
 jQuery('#assignment_group_name_autogenerated').val(group_name_autogenerated);

 jQuery("#is_group_assignment").attr("disabled", true);
 jQuery('is_group_assignment').addClassName('disable');
 jQuery("#student_form_groups").attr("disabled", true);
 jQuery('student_form_groups_style').addClass('disable');
 jQuery("#assignment_group_min").attr("disabled", true);
 jQuery("#assignment_group_max").attr("disabled", true);
 jQuery('group_limit_style').addClass('disable');
 jQuery('#assignment_group_name_autogenerated').find('input, textarea').each(function(i) { jQuery(this).attr("readonly","readonly"); });
 jQuery('group_name_autogenerated_style').addClass('disable');

}

function add_assignment_file() {
  var new_assignment_file_div = jQuery('div', {'class': 'assignment_file'})
  var new_assignment_file = jQuery('input', {'type': 'text', 'name': 'assignment_files[]'})
  new_assignment_file.observe('keydown', function(e) {
    if(e.keyCode == Event.KEY_RETURN) {
      e.preventDefault();
    }
  });
  var remove_link = jQuery('a', {'href': 'javascript:void(0);'})
  remove_link.html('x')
  remove_link.click(function(e) {
    jQuery(new_assignment_file_div).remove();
  });
  new_assignment_file_div.append(new_assignment_file);
  new_assignment_file.after(remove_link);
  jQuery('#assignment_files').append(new_assignment_file_div);
  jQuery('#new_assignment_file').focus().select();
}

function default_group_fields() {
  toggle_persist_groups(false);
  toggle_group_assignment(false);
  toggle_remark_requests(true);
}

function update_due_date(new_due_date) {
  // does nothing if {grace, penalty_decay, penalty}_periods already created
  create_grace_periods();
  create_penalty_decay_periods();
  create_penalty_periods();

  check_due_date(new_due_date);
  grace_periods.set_due_date(new_due_date);
  penalty_decay_periods.set_due_date(new_due_date);
  penalty_periods.set_due_date(new_due_date);
  grace_periods.refresh();
  penalty_decay_periods.refresh();
  penalty_periods.refresh();
}

function refresh_due_date() {
  update_due_date(jQuery('#assignment_due_date'));
}

function toggle_sections_due_date( section_due_dates_type ) {
  if( section_due_dates_type ) {
    jQuery('#section_due_dates_information').show();
  } else {
    jQuery('#section_due_dates_information').hide();
  }
}

function check_due_date(new_due_date) {
  var now = new Date();
  if(Date.parseFormattedString(new_due_date) < now) {
    alert('past_due_date_edit_warning');
  }
}

function change_submission_rule() {
  jQuery("period").each(function(node) { node.removeClass('disabled'); node.show(); });
  jQuery(".period input").each(function(node) {
    jQuery(node).attr("disabled", false);
  });

  if(jQuery('#grace_period_submission_rule').val() == null) {
      jQuery("#grace_period_link").hide();
      // Disable any grace_period_submission_rule periods
    jQuery("grace_periods .period").each(function(node) { node.addClass('disabled'); node.hide(); });
    jQuery("grace_periods .period input").each(function(node){node.disable();});
  }
  else {
      jQuery("#grace_period_link").show();
      if (jQuery("grace_periods .period").length == 0) {
        // Auto expand add a grace period if needed
        jQuery("grace_period_link").onclick();
    }
  }
  if(jQuery('#penalty_decay_period_submission_rule').val() == null) {
      jQuery("#penalty_decay_period_link").hide();
     // Disable any penalty_decay_period_submission_rule periods
    jQuery("penalty_decay_periods .period").each(function(node) { node.addClass('disabled'); node.hide(); });
    jQuery("penalty_decay_periods .period input").each(function(node){node.disable();});
  }
  else {
      jQuery("#penalty_decay_period_link").show();
      if (jQuery("penalty_decay_periods .period").length == 0) {
         // Auto expand add a penalty period if needed
        jQuery("penalty_decay_period_link").onclick();
    }
  }
  if(jQuery('#penalty_period_submission_rule').val() == null) {
      jQuery("#penalty_period_link").hide();
      // Disable any penalty_period_submission_rule periods
    jQuery("penalty_periods .period").each(function(node){ node.addClass('disabled'); node.hide(); }); 
    jQuery("penalty_periods .period input").each(function(node){node.disable();});
  }
  else {
      jQuery("#penalty_period_link").show();
      if (jQuery("penalty_periods .period").length == 0) {
         // Auto expand add a penalty period if needed
        jQuery("penalty_period_link").onclick();
    }
  }
}

function notice_marking_scheme_changed(is_assignment_new, clicked_marking_scheme_type, marking_scheme_type) {
  if(is_assignment_new != true && clicked_marking_scheme_type != marking_scheme_type) {
	if (jQuery('#marking_scheme_notice').hasClass('hidden')) {
	    jQuery('marking_scheme_notice').removeClass('hidden');
	}
	jQuery('#marking_scheme_notice').show();
  } else {
	jQuery('#marking_scheme_notice').hide();
  }
}


