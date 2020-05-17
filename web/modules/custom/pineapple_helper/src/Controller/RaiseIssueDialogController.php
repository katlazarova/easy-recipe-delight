<?php

namespace Drupal\pineapple_helper\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class RaiseIssueDialogController.
 */
class RaiseIssueDialogController extends ControllerBase {

  /**
   * Raise issue dialog controller.
   *
   * @return array
   *   Output content of raise-issue-dialog template.
   */
  public function build() {
    return [
      '#theme' => 'raise_issue_dialog'
    ];
  }
}
