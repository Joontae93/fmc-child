<?php

// =============================================================================
// Modern Events Calendar Single, based on (No Container | Header, Footer)
// =============================================================================

get_header();
?>

<div class="x-main full" role="main">
  <?php while (have_posts()) : ?>
    <?
    the_post();
    $single = new MEC_skin_single();
    $single_event_main = $single->get_event_mec(get_the_ID());
    $single_event_obj = $single_event_main[0];
    ?>
    <aside class="mec-breadcrumbs x-container max width">
      <? $single->display_breadcrumb_widget(get_the_ID()); ?>
    </aside>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <section class="the-event">
        <figure class="featured-image">
          <? the_post_thumbnail('full'); ?>
        </figure>
        <aside class="the-meta">
          <?
          $single->display_date_widget($single_event_obj);
          $single->display_time_widget($single_event_obj);
          ?>
        </aside>
        <h1>
          <? the_title(); ?>
        </h1>
        <div class="the-tags">
          <h4>Tags: </h4>
          <ul class="mec-tags-list">
            <?
            // THE TAGS 
            $mectags = get_the_tags();
            foreach ($mectags as $mectag) {
              echo "<li><a href='$mectag->slug'>$mectag->name</a></li>";
            }
            ?>
          </ul>
        </div>
        <!-- THE CONTENT -->
        <section class="the-content">
          <? the_content(); ?>
        </section>
        <? $single->display_register_button_widget($single_event_obj); ?>
        <!-- RELATED EVENTS -->
        <section class="related-events">
          <? $single->display_next_prev_widget($single_event_obj); ?>
        </section>
        <!-- COMMENTS -->
      </section>
      <!-- START SIDEBAR -->
      <aside class="the-sidebar">
        <?
        // THE SOCIAL SHARE
        $single->display_social_widget($single_event_obj);
        // THE SCHEDULE
        $single->display_hourly_schedules_widget($single_event_obj);
        // CALENDAR EXPORT
        $single->display_export_widget($single_event_obj);
        // BOOKING
        $single->display_booking_widget($single_event_obj, $single_event_main);
        ?>

      </aside>
      <!-- END SIDEBAR -->

    </article>

  <?php endwhile; ?>

</div>

<?php get_footer(); ?>